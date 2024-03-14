window.addEventListener('DOMContentLoaded', () => {

    const btn = document.querySelector('.btn-burger'),
          img = document.querySelector('.btn-burger>img'),
          menu = document.querySelector('.burger-menu'),
          close = document.querySelector('.close'),
          links = document.querySelectorAll('.burger-item'),
          btnWelcome = document.querySelector('.btn-welcome'),
          btnContact = document.querySelector('.btn-contact'),
          btns = document.querySelector('.btns'),
          btnsG = document.querySelector('.btn-service.g'),
          btnsL = document.querySelector('.btn-service.l'),
          btnsP = document.querySelector('.btn-service.p'),
          garden = document.querySelectorAll('.services .g'),
          lawn= document.querySelectorAll('.services .l'),
          planting = document.querySelectorAll('.services .p'),
          selectContent = document.querySelectorAll('.price-content'),
          selectItems = document.querySelectorAll('.select-item .button'),
          selectItem = document.querySelectorAll('.select-item')
          selectBtn = document.querySelector('.accordion-prices'),
          selectOne = document.querySelector('div.select-item div.item-image img.btn1'),
          selectTwo = document.querySelector('div.select-item div.item-image img.btn2'),
          selectThree = document.querySelector('div.select-item div.item-image img.btn3'),
          selectImgOne = document.querySelector('.btn1'),
          selectImgTwo = document.querySelector('.btn2'),
          selectImgThree = document.querySelector('.btn3'),
          btnOrder = document.querySelectorAll('.order-price'),
          contactItem = document.querySelector('.contact-city'),
          cityName = document.querySelector('.city-item'),
          contactBtn = document.querySelector('.cont1'),
          dropdownSelect = document.querySelector('.dropdown-select'),
          dropdownBtn = document.querySelectorAll('.drop-item'),
          contactCard = document.querySelector('.contact-cards'),
          callBtn = document.querySelector('.call'),
          contactSection = document.querySelector('.contact .container'),
          scroll = calcScroll();

    btn.addEventListener('click', () => {
        menu.style.display = "block";
        menu.classList.remove('off');
        menu.classList.add('active');

        if(document.scrollHeight !== document.offsetHeight) {
            document.body.style.overflow = "hidden";
            document.body.style.marginRight = `${scroll}px`;
        }
    });

    btnWelcome.addEventListener('click', () => {
        document.getElementById('about').scrollIntoView();
    })
    btnContact.addEventListener('click', () => {
        document.getElementById('contact').scrollIntoView();
    })

    document.addEventListener('click', (e) => {
        if(e.target !== menu && e.target !== btn && e.target !== img) {
            closeBurger();
        }
    });
    document.addEventListener('click', (e) => {
        if(e.target !== dropdownSelect && e.target !== contactBtn) {
            contactItem.style.backgroundColor = '#D6E7D2';
            contactItem.style.boxShadow = '0px 4px 4px rgba(0, 0, 0, 0.25);';
            contactItem.style.outline = 'none';
            contactBtn.src = 'assets/images/accordion_btn.png';

            dropdownSelect.style.marginTop = '-230px';
            dropdownSelect.style.visibility = 'hidden';

            dropdownBtn.forEach(item => {
                item.classList.remove('active');
            });
        }
    })

    links.forEach(link => {
        link.addEventListener('click', () => {
            menu.classList.remove('active');
            menu.classList.add('off');


        if(document.scrollHeight !== document.offsetHeight) {
            document.body.style.overflow = "";
            document.body.style.marginRight = `0px`;
        }
        })
    });
    close.addEventListener('click', () => {
        closeBurger();
    });

    btns.addEventListener('click', (e) => {
        e.preventDefault();
        e.target.classList.toggle('active');
        if(btnsG.classList.contains('active')) {
            activeItem(btnsG, garden, planting, lawn);
            noDisabled(btnsL, btnsP);
        } else {
            noActiveItem(btnsG, garden, planting, lawn)
        }
        if(btnsL.classList.contains('active')) {
            activeItem(btnsL, lawn, planting, garden);
            noDisabled(btnsG, btnsP);
        }
        if(btnsP.classList.contains('active')) {
            activeItem(btnsP, planting, garden, lawn);
            noDisabled(btnsL, btnsG);
        }

        if(btnsG.classList.contains('active') && btnsL.classList.contains('active')) {
            disabled(btnsP);
            doubleActive(btnsG, btnsL, garden, lawn, planting);
        }
        if(btnsG.classList.contains('active') && btnsP.classList.contains('active')) {
            disabled(btnsL);
            doubleActive(btnsG, btnsP, garden, planting, lawn);
        }
        if(btnsL.classList.contains('active') && btnsP.classList.contains('active')) {
            disabled(btnsG);
            doubleActive(btnsL, btnsP, lawn, planting, garden);
        }
    });

    selectBtn.addEventListener('click', (e) => {
        e.preventDefault();
        if (e.target.matches('div.select-item div.item-image img.btn1')) {
            selectToggle(0, 1, 2, selectImgOne, selectImgTwo, selectImgThree, 'basic');
        }
        if (e.target.matches('div.select-item div.item-image img.btn2')) {
            selectToggle(1, 0, 2, selectImgTwo, selectImgOne, selectImgThree, 'stand');
        }
        if (e.target.matches('div.select-item div.item-image img.btn3')) {
            selectToggle(2, 0, 1, selectImgThree, selectImgOne, selectImgTwo, 'pro');
        }
    });

    btnOrder.forEach (btn => {
        btn.addEventListener('click', handleButtonClick);
    });

    contactBtn.addEventListener('click', (e) => {
        try{
            removeCard('.contact-card');
            contactCard.style.display = 'none';
        } catch (e) {}
        contactItem.classList.toggle('active');
        if(contactItem.classList.contains('active')) {
            contactItem.style.backgroundColor = '#C1E698';
            contactItem.style.boxShadow = 'none';
            contactItem.style.outline = '1px solid #D6E7D2';
            contactBtn.src = 'assets/images/accordion_btn_open.png';

            dropdownSelect.style.marginTop = '148px';
            dropdownSelect.style.visibility = 'visible';

            if(window.screen.width >= 768) {
                dropdownSelect.style.marginTop = '50px';
                dropdownSelect.style.visibility = 'visible';
            }

            if(window.screen.width <= 380) {
                document.querySelector('.contact-img').style.visibility = 'hidden';
                document.querySelector('.contact .container h2').style.marginBottom = '42px';
                document.querySelector('.contact .container h2').style.marginTop= '25px';
            }
        } else if(!contactItem.classList.contains('active')){
            contactItem.style.backgroundColor = '#D6E7D2';
            contactItem.style.boxShadow = '0px 4px 4px rgba(0, 0, 0, 0.25);';
            contactItem.style.outline = 'none';
            contactBtn.src = 'assets/images/accordion_btn.png';

            dropdownSelect.style.marginTop = '-230px';
            dropdownSelect.style.visibility = 'hidden';
            if(window.screen.width <= 380) {
                document.querySelector('.contact-img').style.visibility = 'visible';
                document.querySelector('.contact .container h2').style.marginBottom = '80px';
                document.querySelector('.contact .container h2').style.marginTop= '25px';
            }
        }
    })
    dropdownSelect.addEventListener('click', (e) => {
        e.stopPropagation();
        if(e.target.matches('div.dropdown-select ul.dropdown li.drop-item.one')) {
            dropdownToggle(dropdownBtn[0], 'Canandaigua, NY', '+1 585 393 0001', '151 Charlotte Street', 'one');
        }
        if(e.target.matches('div.dropdown-select ul.dropdown li.drop-item.two')) {
            dropdownToggle(dropdownBtn[1], 'New York City', '+1 212 456 0002', '9 East 91st Street', 'two');
        }
        if(e.target.matches('div.dropdown-select ul.dropdown li.drop-item.three')) {
            dropdownToggle(dropdownBtn[2], 'Yonkers, NY', '+1 914 678 0003', '511 Warburton Ave', 'three');
        }
        if(e.target.matches('div.dropdown-select ul.dropdown li.drop-item.four')) {
            dropdownToggle(dropdownBtn[3], 'Sherrill, NY', '+1 315 908 0004', '14 WEST Noyes BLVD', 'four');
        }
        if(e.target.matches('div.dropdown-select ul.dropdown')) {
            dropdownBtn.forEach(item => {
                item.classList.remove('active');
            });
            cityName.innerHTML = 'City';
        }
    });

    function closeBurger() {
        menu.classList.remove('active');
        menu.classList.add('off');

        if(document.scrollHeight !== document.offsetHeight) {
            document.body.style.overflow = "";
            document.body.style.marginRight = `0px`;
        }
    }

    function calcScroll() {
        let div = document.createElement('div');

        div.style.width = '50px';
        div.style.height = '50px';
        div.style.overflowY = 'scroll';
        div.style.visibility = 'hidden';

        document.body.appendChild(div);
        let scrollWidth = div.offsetWidth - div.clientWidth;
        div.remove();

        return scrollWidth;
    }

    function activeItem (activeBtn, one, two, three) {
        console.log(1);
        if(activeBtn.classList.contains('active')) {
            one.forEach(item => {
                item.classList.remove('no-active');
            });
            two.forEach(item => {
                item.classList.add('no-active');
            });
            three.forEach(item => {
                item.classList.add('no-active');
            });
        }
    }

    function noActiveItem (activeBtn, one, two, three) {
        if(!activeBtn.classList.contains('active')) {
            one.forEach(item => {
                item.classList.remove('no-active');
            });
            two.forEach(item => {
                item.classList.remove('no-active');
            });
            three.forEach(item => {
                item.classList.remove('no-active');
            });
        }
    }

    function doubleActive (btnOne, btnTwo, removeOne, removeTwo, add) {
        if(btnOne.classList.contains('active') && btnTwo.classList.contains('active')) {
            removeOne.forEach(item => {
                item.classList.remove('no-active');
            });
            removeTwo.forEach(item => {
                item.classList.remove('no-active');
            });
            add.forEach(item => {
                item.classList.add('no-active');
            });
        } else if(btnOne.classList.contains('active') && !btnTwo.classList.contains('active')) {
            removeOne.forEach(item => {
                item.classList.remove('no-active');
            });
            removeTwo.forEach(item => {
                item.classList.add('no-active');
            });
            add.forEach(item => {
                item.classList.add('no-active');
            });
        } else if(!btnOne.classList.contains('active') && btnTwo.classList.contains('active')) {
            removeOne.forEach(item => {
                item.classList.add('no-active');
            });
            removeTwo.forEach(item => {
                item.classList.remove('no-active');
            });
            add.forEach(item => {
                item.classList.add('no-active');
            });
        }
    }

    function disabled(btn) {
        btn.disabled = true;
        btn.style.cursor = 'not-allowed';
    }

    function noDisabled(btnOne, btnTwo) {
        const arr = [btnOne, btnTwo];
        arr.forEach(btn => {
            btn.disabled = false;
            btn.style.cursor = 'pointer';
        })
    }

    function selectToggle(indexOne, indexTwo, indexThree, btnSelect, noneImgOne, noneImgTwo, className) {
            selectItem[indexOne].classList.toggle('visible');
            selectContent.forEach(cont => {
                 if(selectItem[indexOne].classList.contains('visible') && cont.classList.contains(className)){
                     cont.style.marginTop = '-15px';
                     cont.style.visibility = 'visible';
                     cont.style.transition = 'opacity .3s linear';
                     selectItems[indexOne].style.backgroundColor = 'rgba(214,231,210)';
                     btnSelect.src = 'assets/images/accordion_btn_open.png';
                     selectContent[indexOne].style.opacity = '1';
                     selectBtn.style.rowGap = '15px';
                     if(window.screen.width <= 380) {
                         document.querySelector('.prices-wrapper h2').style.marginTop = '60px';
                         document.querySelector('.prices-wrapper h2').style.marginBottom = '0';
                         selectBtn.style.rowGap = '16px';
                     }

                 } else if (!selectItem[indexOne].classList.contains('visible')){
                     selectItem[indexOne].classList.remove('visible')
                     cont.style.visibility = 'hidden';
                     cont.style.marginTop = '-125px';
                     cont.style.transition = 'opacity .5s linear';
                     btnSelect.src = 'assets/images/accordion_btn.png';
                     selectItems[indexOne].style.backgroundColor = 'rgba(237,242,236)';
                     selectContent[indexOne].style.opacity = '0';
                     selectBtn.style.rowGap = '32px';
                     if(window.screen.width <= 380) {
                         document.querySelector('.prices-wrapper h2').style.marginTop = '16px';
                         document.querySelector('.prices-wrapper h2').style.marginBottom = '14px';
                         selectBtn.style.rowGap = '20px';
                     }
                 }

                 if(selectItem[indexOne].classList.contains('visible')) {
                     selectItem[indexTwo].classList.remove('visible');
                     selectItem[indexThree].classList.remove('visible');
                     selectContent[indexTwo].style.visibility = 'hidden';
                     selectContent[indexTwo].style.marginTop = '-125px';
                     selectContent[indexTwo].style.transition = 'opacity .5s linear';
                     selectContent[indexThree].style.visibility = 'hidden';
                     selectContent[indexThree].style.marginTop = '-125px';
                     selectContent[indexThree].style.transition = 'opacity .5s linear';
                     noneImgOne.src = 'assets/images/accordion_btn.png';
                     noneImgTwo.src = 'assets/images/accordion_btn.png';
                     selectItems[indexTwo].style.backgroundColor = 'rgba(237,242,236)';
                     selectItems[indexThree].style.backgroundColor = 'rgba(237,242,236)';
                }
            });
    }

    function handleButtonClick() {
        document.getElementById('contact').scrollIntoView({block: "center", behavior: "smooth"});
    }

    function dropdownToggle(btn, city, phone, adress, num) {
        contactItem.classList.remove('active');
        dropdownBtn.forEach(item => {
            item.classList.remove('active');
        });
        btn.classList.add('active');
        dropdownSelect.style.marginTop = '-230px';
        dropdownSelect.style.visibility = 'hidden';

        createCard(city, phone, adress, num);
        contactCard.style.display = 'block';

        contactItem.style.backgroundColor = '#C1E698';
        contactItem.style.boxShadow = 'none';
        contactItem.style.outline = '1px solid #D6E7D2';
        contactBtn.src = 'assets/images/accordion_btn_select.png';

        if(window.screen.width <= 380) {
            document.querySelector('.contact-img').style.visibility = 'hidden';
            document.querySelector('.contact .container h2').style.marginBottom = '42px';
            document.querySelector('.contact .container h2').style.marginTop= '102px';
        }

        cityName.innerHTML = city;
        console.log(contactCard);
    }

    function createCard (city, phone, adresse, num) {
        const element = document.createElement('div');

        element.classList.add('contact-card');

        element.innerHTML = `
                <div class="card-descr">
                    <div class="card-item">
                        <p class="city">City:</p>
                        <p class="phone">Phone:</p>
                        <p class="adress">Office adress:</p>
                    </div>
                    <div class="card-info">
                        <span class="city">${city}</span>
                        <span class="phone">${phone}</span>
                        <span class="adress">${adresse}</span>
                    </div>
                </div>
                <a href="tel:${phone}" class="call">Call us</a>
        `;
        contactCard.append(element);
    }

    function removeCard (selector) {
        const element = document.querySelector(selector);
        contactCard.removeChild(element);
    }
});

