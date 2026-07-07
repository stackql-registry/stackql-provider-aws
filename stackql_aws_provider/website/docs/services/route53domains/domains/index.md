--- 
title: domains
hide_title: false
hide_table_of_contents: false
keywords:
  - domains
  - route53domains
  - aws
  - infrastructure-as-code
  - configuration-as-data
  - cloud inventory
description: Query, deploy and manage aws resources using SQL
custom_edit_url: null
image: /img/stackql-aws-provider-featured-image.png
---

import CopyableCode from '@site/src/components/CopyableCode/CopyableCode';
import CodeBlock from '@theme/CodeBlock';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Creates, updates, deletes, gets or lists a <code>domains</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="domains" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.route53domains.domains" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_domains"
    values={[
        { label: 'list_domains', value: 'list_domains' }
    ]}
>
<TabItem value="list_domains">

<table>
<thead>
    <tr>
    <th>Name</th>
    <th>Datatype</th>
    <th>Description</th>
    </tr>
</thead>
<tbody>
<tr>
    <td><CopyableCode code="AutoRenew" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether the domain is automatically renewed upon expiration.</td>
</tr>
<tr>
    <td><CopyableCode code="DomainName" /></td>
    <td><code>string</code></td>
    <td>The name of the domain that the summary information applies to.</td>
</tr>
<tr>
    <td><CopyableCode code="Expiry" /></td>
    <td><code>string (date-time)</code></td>
    <td>Expiration date of the domain in Unix time format and Coordinated Universal Time (UTC).</td>
</tr>
<tr>
    <td><CopyableCode code="TransferLock" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether a domain is locked from unauthorized transfer to another party.</td>
</tr>
</tbody>
</table>
</TabItem>
</Tabs>

## Methods

The following methods are available for this resource:

<table>
<thead>
    <tr>
    <th>Name</th>
    <th>Accessible by</th>
    <th>Required Params</th>
    <th>Optional Params</th>
    <th>Description</th>
    </tr>
</thead>
<tbody>
<tr>
    <td><a href="#list_domains"><CopyableCode code="list_domains" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>This operation returns all the domain names registered with Amazon Route 53 for the current Amazon Web Services account if no filtering conditions are used.</td>
</tr>
<tr>
    <td><a href="#register_domain"><CopyableCode code="register_domain" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-DomainName"><code>DomainName</code></a>, <a href="#parameter-DurationInYears"><code>DurationInYears</code></a>, <a href="#parameter-AdminContact"><code>AdminContact</code></a>, <a href="#parameter-RegistrantContact"><code>RegistrantContact</code></a>, <a href="#parameter-TechContact"><code>TechContact</code></a></td>
    <td></td>
    <td>This operation registers a domain. For some top-level domains (TLDs), this operation requires extra parameters. When you register a domain, Amazon Route 53 does the following: Creates a Route 53 hosted zone that has the same name as the domain. Route 53 assigns four name servers to your hosted zone and automatically updates your domain registration with the names of these name servers. Enables auto renew, so your domain registration will renew automatically each year. We'll notify you in advance of the renewal date so you can choose whether to renew the registration. Optionally enables privacy protection, so WHOIS queries return contact for the registrar or the phrase "REDACTED FOR PRIVACY", or "On behalf of &lt;domain name&gt; owner." If you don't enable privacy protection, WHOIS queries return the information that you entered for the administrative, registrant, and technical contacts. While some domains may allow different privacy settings per contact, we recommend specifying the same privacy setting for all contacts. If registration is successful, returns an operation ID that you can use to track the progress and completion of the action. If the request is not completed successfully, the domain registrant is notified by email. Charges your Amazon Web Services account an amount based on the top-level domain. For more information, see Amazon Route 53 Pricing.</td>
</tr>
<tr>
    <td><a href="#associate_delegation_signer_to_domain"><CopyableCode code="associate_delegation_signer_to_domain" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-DomainName"><code>DomainName</code></a>, <a href="#parameter-SigningAttributes"><code>SigningAttributes</code></a></td>
    <td></td>
    <td>Creates a delegation signer (DS) record in the registry zone for this domain name. Note that creating DS record at the registry impacts DNSSEC validation of your DNS records. This action may render your domain name unavailable on the internet if the steps are completed in the wrong order, or with incorrect timing. For more information about DNSSEC signing, see Configuring DNSSEC signing in the Route 53 developer guide.</td>
</tr>
<tr>
    <td><a href="#disassociate_delegation_signer_from_domain"><CopyableCode code="disassociate_delegation_signer_from_domain" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-DomainName"><code>DomainName</code></a>, <a href="#parameter-Id"><code>Id</code></a></td>
    <td></td>
    <td>Deletes a delegation signer (DS) record in the registry zone for this domain name.</td>
</tr>
<tr>
    <td><a href="#update_domain_nameservers"><CopyableCode code="update_domain_nameservers" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-DomainName"><code>DomainName</code></a>, <a href="#parameter-Nameservers"><code>Nameservers</code></a></td>
    <td></td>
    <td>This operation replaces the current set of name servers for the domain with the specified set of name servers. If you use Amazon Route 53 as your DNS service, specify the four name servers in the delegation set for the hosted zone for the domain. If successful, this operation returns an operation ID that you can use to track the progress and completion of the action. If the request is not completed successfully, the domain registrant will be notified by email.</td>
</tr>
<tr>
    <td><a href="#update_domain_contact"><CopyableCode code="update_domain_contact" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-DomainName"><code>DomainName</code></a></td>
    <td></td>
    <td>This operation updates the contact information for a particular domain. You must specify information for at least one contact: registrant, administrator, or technical. If the update is successful, this method returns an operation ID that you can use to track the progress and completion of the operation. If the request is not completed successfully, the domain registrant will be notified by email.</td>
</tr>
<tr>
    <td><a href="#delete_tags_for_domain"><CopyableCode code="delete_tags_for_domain" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>This operation deletes the specified tags for a domain. All tag operations are eventually consistent; subsequent operations might not immediately represent all issued operations.</td>
</tr>
<tr>
    <td><a href="#delete_domain"><CopyableCode code="delete_domain" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>This operation deletes the specified domain. This action is permanent. For more information, see Deleting a domain name registration. To transfer the domain registration to another registrar, use the transfer process that’s provided by the registrar to which you want to transfer the registration. Otherwise, the following apply: You can’t get a refund for the cost of a deleted domain registration. The registry for the top-level domain might hold the domain name for a brief time before releasing it for other users to register (varies by registry). When the registration has been deleted, we'll send you a confirmation to the registrant contact. The email will come from noreply@domainnameverification.net or noreply@emailverification.info or noreply@registrar.amazon.</td>
</tr>
<tr>
    <td><a href="#accept_domain_transfer_from_another_aws_account"><CopyableCode code="accept_domain_transfer_from_another_aws_account" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-DomainName"><code>DomainName</code></a></td>
    <td></td>
    <td>Accepts the transfer of a domain from another Amazon Web Services account to the currentAmazon Web Services account. You initiate a transfer between Amazon Web Services accounts using TransferDomainToAnotherAwsAccount. If you use the CLI command at accept-domain-transfer-from-another-aws-account, use JSON format as input instead of text because otherwise CLI will throw an error from domain transfer input that includes single quotes. Use either ListOperations or GetOperationDetail to determine whether the operation succeeded. GetOperationDetail provides additional information, for example, Domain Transfer from Aws Account 111122223333 has been cancelled.</td>
</tr>
<tr>
    <td><a href="#cancel_domain_transfer_to_another_aws_account"><CopyableCode code="cancel_domain_transfer_to_another_aws_account" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-DomainName"><code>DomainName</code></a></td>
    <td></td>
    <td>Cancels the transfer of a domain from the current Amazon Web Services account to another Amazon Web Services account. You initiate a transfer betweenAmazon Web Services accounts using TransferDomainToAnotherAwsAccount. You must cancel the transfer before the other Amazon Web Services account accepts the transfer using AcceptDomainTransferFromAnotherAwsAccount. Use either ListOperations or GetOperationDetail to determine whether the operation succeeded. GetOperationDetail provides additional information, for example, Domain Transfer from Aws Account 111122223333 has been cancelled.</td>
</tr>
<tr>
    <td><a href="#check_domain_availability"><CopyableCode code="check_domain_availability" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-DomainName"><code>DomainName</code></a></td>
    <td></td>
    <td>This operation checks the availability of one domain name. Note that if the availability status of a domain is pending, you must submit another request to determine the availability of the domain name.</td>
</tr>
<tr>
    <td><a href="#check_domain_transferability"><CopyableCode code="check_domain_transferability" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-DomainName"><code>DomainName</code></a></td>
    <td></td>
    <td>Checks whether a domain name can be transferred to Amazon Route 53.</td>
</tr>
<tr>
    <td><a href="#disable_domain_auto_renew"><CopyableCode code="disable_domain_auto_renew" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-DomainName"><code>DomainName</code></a></td>
    <td></td>
    <td>This operation disables automatic renewal of domain registration for the specified domain.</td>
</tr>
<tr>
    <td><a href="#disable_domain_transfer_lock"><CopyableCode code="disable_domain_transfer_lock" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-DomainName"><code>DomainName</code></a></td>
    <td></td>
    <td>This operation removes the transfer lock on the domain (specifically the clientTransferProhibited status) to allow domain transfers. We recommend you refrain from performing this action unless you intend to transfer the domain to a different registrar. Successful submission returns an operation ID that you can use to track the progress and completion of the action. If the request is not completed successfully, the domain registrant will be notified by email.</td>
</tr>
<tr>
    <td><a href="#enable_domain_auto_renew"><CopyableCode code="enable_domain_auto_renew" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-DomainName"><code>DomainName</code></a></td>
    <td></td>
    <td>This operation configures Amazon Route 53 to automatically renew the specified domain before the domain registration expires. The cost of renewing your domain registration is billed to your Amazon Web Services account. The period during which you can renew a domain name varies by TLD. For a list of TLDs and their renewal policies, see Domains That You Can Register with Amazon Route 53 in the Amazon Route 53 Developer Guide. Route 53 requires that you renew before the end of the renewal period so we can complete processing before the deadline.</td>
</tr>
<tr>
    <td><a href="#enable_domain_transfer_lock"><CopyableCode code="enable_domain_transfer_lock" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-DomainName"><code>DomainName</code></a></td>
    <td></td>
    <td>This operation sets the transfer lock on the domain (specifically the clientTransferProhibited status) to prevent domain transfers. Successful submission returns an operation ID that you can use to track the progress and completion of the action. If the request is not completed successfully, the domain registrant will be notified by email.</td>
</tr>
<tr>
    <td><a href="#push_domain"><CopyableCode code="push_domain" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-DomainName"><code>DomainName</code></a>, <a href="#parameter-Target"><code>Target</code></a></td>
    <td></td>
    <td>Moves a domain from Amazon Web Services to another registrar. Supported actions: Changes the IPS tags of a .uk domain, and pushes it to transit. Transit means that the domain is ready to be transferred to another registrar.</td>
</tr>
<tr>
    <td><a href="#reject_domain_transfer_from_another_aws_account"><CopyableCode code="reject_domain_transfer_from_another_aws_account" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-DomainName"><code>DomainName</code></a></td>
    <td></td>
    <td>Rejects the transfer of a domain from another Amazon Web Services account to the current Amazon Web Services account. You initiate a transfer betweenAmazon Web Services accounts using TransferDomainToAnotherAwsAccount. Use either ListOperations or GetOperationDetail to determine whether the operation succeeded. GetOperationDetail provides additional information, for example, Domain Transfer from Aws Account 111122223333 has been cancelled.</td>
</tr>
<tr>
    <td><a href="#renew_domain"><CopyableCode code="renew_domain" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-DomainName"><code>DomainName</code></a>, <a href="#parameter-CurrentExpiryYear"><code>CurrentExpiryYear</code></a></td>
    <td></td>
    <td>This operation renews a domain for the specified number of years. The cost of renewing your domain is billed to your Amazon Web Services account. We recommend that you renew your domain several weeks before the expiration date. Some TLD registries delete domains before the expiration date if you haven't renewed far enough in advance. For more information about renewing domain registration, see Renewing Registration for a Domain in the Amazon Route 53 Developer Guide.</td>
</tr>
<tr>
    <td><a href="#retrieve_domain_auth_code"><CopyableCode code="retrieve_domain_auth_code" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-DomainName"><code>DomainName</code></a></td>
    <td></td>
    <td>This operation returns the authorization code for the domain. To transfer a domain to another registrar, you provide this value to the new registrar.</td>
</tr>
<tr>
    <td><a href="#transfer_domain"><CopyableCode code="transfer_domain" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-DomainName"><code>DomainName</code></a>, <a href="#parameter-AdminContact"><code>AdminContact</code></a>, <a href="#parameter-RegistrantContact"><code>RegistrantContact</code></a>, <a href="#parameter-TechContact"><code>TechContact</code></a></td>
    <td></td>
    <td>Transfers a domain from another registrar to Amazon Route 53. For more information about transferring domains, see the following topics: For transfer requirements, a detailed procedure, and information about viewing the status of a domain that you're transferring to Route 53, see Transferring Registration for a Domain to Amazon Route 53 in the Amazon Route 53 Developer Guide. For information about how to transfer a domain from one Amazon Web Services account to another, see TransferDomainToAnotherAwsAccount. For information about how to transfer a domain to another domain registrar, see Transferring a Domain from Amazon Route 53 to Another Registrar in the Amazon Route 53 Developer Guide. During the transfer of any country code top-level domains (ccTLDs) to Route 53, except for .cc and .tv, updates to the owner contact are ignored and the owner contact data from the registry is used. You can update the owner contact after the transfer is complete. For more information, see UpdateDomainContact. If the registrar for your domain is also the DNS service provider for the domain, we highly recommend that you transfer your DNS service to Route 53 or to another DNS service provider before you transfer your registration. Some registrars provide free DNS service when you purchase a domain registration. When you transfer the registration, the previous registrar will not renew your domain registration and could end your DNS service at any time. If the registrar for your domain is also the DNS service provider for the domain and you don't transfer DNS service to another provider, your website, email, and the web applications associated with the domain might become unavailable. If the transfer is successful, this method returns an operation ID that you can use to track the progress and completion of the action. If the transfer doesn't complete successfully, the domain registrant will be notified by email.</td>
</tr>
<tr>
    <td><a href="#transfer_domain_to_another_aws_account"><CopyableCode code="transfer_domain_to_another_aws_account" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-DomainName"><code>DomainName</code></a>, <a href="#parameter-AccountId"><code>AccountId</code></a></td>
    <td></td>
    <td>Transfers a domain from the current Amazon Web Services account to another Amazon Web Services account. Note the following: The Amazon Web Services account that you're transferring the domain to must accept the transfer. If the other account doesn't accept the transfer within 3 days, we cancel the transfer. See AcceptDomainTransferFromAnotherAwsAccount. You can cancel the transfer before the other account accepts it. See CancelDomainTransferToAnotherAwsAccount. The other account can reject the transfer. See RejectDomainTransferFromAnotherAwsAccount. When you transfer a domain from one Amazon Web Services account to another, Route 53 doesn't transfer the hosted zone that is associated with the domain. DNS resolution isn't affected if the domain and the hosted zone are owned by separate accounts, so transferring the hosted zone is optional. For information about transferring the hosted zone to another Amazon Web Services account, see Migrating a Hosted Zone to a Different Amazon Web Services Account in the Amazon Route 53 Developer Guide. Use either ListOperations or GetOperationDetail to determine whether the operation succeeded. GetOperationDetail provides additional information, for example, Domain Transfer from Aws Account 111122223333 has been cancelled.</td>
</tr>
<tr>
    <td><a href="#update_domain_contact_privacy"><CopyableCode code="update_domain_contact_privacy" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-DomainName"><code>DomainName</code></a></td>
    <td></td>
    <td>This operation updates the specified domain contact's privacy setting. When privacy protection is enabled, your contact information is replaced with contact information for the registrar or with the phrase "REDACTED FOR PRIVACY", or "On behalf of &lt;domain name&gt; owner." While some domains may allow different privacy settings per contact, we recommend specifying the same privacy setting for all contacts. This operation affects only the contact information for the specified contact type (administrative, registrant, or technical). If the request succeeds, Amazon Route 53 returns an operation ID that you can use with GetOperationDetail to track the progress and completion of the action. If the request doesn't complete successfully, the domain registrant will be notified by email. By disabling the privacy service via API, you consent to the publication of the contact information provided for this domain via the public WHOIS database. You certify that you are the registrant of this domain name and have the authority to make this decision. You may withdraw your consent at any time by enabling privacy protection using either UpdateDomainContactPrivacy or the Route 53 console. Enabling privacy protection removes the contact information provided for this domain from the WHOIS database. For more information on our privacy practices, see https:​//aws.amazon.com/privacy/.</td>
</tr>
<tr>
    <td><a href="#update_tags_for_domain"><CopyableCode code="update_tags_for_domain" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-DomainName"><code>DomainName</code></a></td>
    <td></td>
    <td>This operation adds or updates tags for a specified domain. All tag operations are eventually consistent; subsequent operations might not immediately represent all issued operations.</td>
</tr>
</tbody>
</table>

## Parameters

Parameters can be passed in the `WHERE` clause of a query. Check the [Methods](#methods) section to see which parameters are required or optional for each operation.

<table>
<thead>
    <tr>
    <th>Name</th>
    <th>Datatype</th>
    <th>Description</th>
    </tr>
</thead>
<tbody>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_domains"
    values={[
        { label: 'list_domains', value: 'list_domains' }
    ]}
>
<TabItem value="list_domains">

This operation returns all the domain names registered with Amazon Route 53 for the current Amazon Web Services account if no filtering conditions are used.

```sql
SELECT
AutoRenew,
DomainName,
Expiry,
TransferLock
FROM aws.route53domains.domains
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="register_domain"
    values={[
        { label: 'register_domain', value: 'register_domain' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="register_domain">

This operation registers a domain. For some top-level domains (TLDs), this operation requires extra parameters. When you register a domain, Amazon Route 53 does the following: Creates a Route 53 hosted zone that has the same name as the domain. Route 53 assigns four name servers to your hosted zone and automatically updates your domain registration with the names of these name servers. Enables auto renew, so your domain registration will renew automatically each year. We'll notify you in advance of the renewal date so you can choose whether to renew the registration. Optionally enables privacy protection, so WHOIS queries return contact for the registrar or the phrase "REDACTED FOR PRIVACY", or "On behalf of &lt;domain name&gt; owner." If you don't enable privacy protection, WHOIS queries return the information that you entered for the administrative, registrant, and technical contacts. While some domains may allow different privacy settings per contact, we recommend specifying the same privacy setting for all contacts. If registration is successful, returns an operation ID that you can use to track the progress and completion of the action. If the request is not completed successfully, the domain registrant is notified by email. Charges your Amazon Web Services account an amount based on the top-level domain. For more information, see Amazon Route 53 Pricing.

```sql
INSERT INTO aws.route53domains.domains (
DomainName,
IdnLangCode,
DurationInYears,
AutoRenew,
AdminContact,
RegistrantContact,
TechContact,
PrivacyProtectAdminContact,
PrivacyProtectRegistrantContact,
PrivacyProtectTechContact,
BillingContact,
PrivacyProtectBillingContact,
region
)
SELECT 
'{{ DomainName }}' /* required */,
'{{ IdnLangCode }}',
{{ DurationInYears }} /* required */,
{{ AutoRenew }},
'{{ AdminContact }}' /* required */,
'{{ RegistrantContact }}' /* required */,
'{{ TechContact }}' /* required */,
{{ PrivacyProtectAdminContact }},
{{ PrivacyProtectRegistrantContact }},
{{ PrivacyProtectTechContact }},
'{{ BillingContact }}',
{{ PrivacyProtectBillingContact }},
'{{ region }}'
RETURNING
OperationId
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: domains
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the domains resource.
    - name: DomainName
      value: "{{ DomainName }}"
      description: |
        The domain name that you want to register. The top-level domain (TLD), such as .com, must be a TLD that Route 53 supports. For a list of supported TLDs, see Domains that You Can Register with Amazon Route 53 in the Amazon Route 53 Developer Guide. The domain name can contain only the following characters: Letters a through z. Domain names are not case sensitive. Numbers 0 through 9. Hyphen (-). You can't specify a hyphen at the beginning or end of a label. Period (.) to separate the labels in the name, such as the . in example.com. Internationalized domain names are not supported for some top-level domains. To determine whether the TLD that you want to use supports internationalized domain names, see Domains that You Can Register with Amazon Route 53. For more information, see Formatting Internationalized Domain Names.
    - name: IdnLangCode
      value: "{{ IdnLangCode }}"
      description: |
        Reserved for future use.
    - name: DurationInYears
      value: {{ DurationInYears }}
      description: |
        The number of years that you want to register the domain for. Domains are registered for a minimum of one year. The maximum period depends on the top-level domain. For the range of valid values for your domain, see Domains that You Can Register with Amazon Route 53 in the Amazon Route 53 Developer Guide. Default: 1
    - name: AutoRenew
      value: {{ AutoRenew }}
      description: |
        Indicates whether the domain will be automatically renewed (true) or not (false). Auto renewal only takes effect after the account is charged. Default: true
    - name: AdminContact
      description: |
        Provides detailed contact information. For information about the values that you specify for each element, see ContactDetail.
      value:
        FirstName: "{{ FirstName }}"
        LastName: "{{ LastName }}"
        ContactType: "{{ ContactType }}"
        OrganizationName: "{{ OrganizationName }}"
        AddressLine1: "{{ AddressLine1 }}"
        AddressLine2: "{{ AddressLine2 }}"
        City: "{{ City }}"
        State: "{{ State }}"
        CountryCode: "{{ CountryCode }}"
        ZipCode: "{{ ZipCode }}"
        PhoneNumber: "{{ PhoneNumber }}"
        Email: "{{ Email }}"
        Fax: "{{ Fax }}"
        ExtraParams:
          - Name: "{{ Name }}"
            Value: "{{ Value }}"
    - name: RegistrantContact
      description: |
        Provides detailed contact information. For information about the values that you specify for each element, see ContactDetail.
      value:
        FirstName: "{{ FirstName }}"
        LastName: "{{ LastName }}"
        ContactType: "{{ ContactType }}"
        OrganizationName: "{{ OrganizationName }}"
        AddressLine1: "{{ AddressLine1 }}"
        AddressLine2: "{{ AddressLine2 }}"
        City: "{{ City }}"
        State: "{{ State }}"
        CountryCode: "{{ CountryCode }}"
        ZipCode: "{{ ZipCode }}"
        PhoneNumber: "{{ PhoneNumber }}"
        Email: "{{ Email }}"
        Fax: "{{ Fax }}"
        ExtraParams:
          - Name: "{{ Name }}"
            Value: "{{ Value }}"
    - name: TechContact
      description: |
        Provides detailed contact information. For information about the values that you specify for each element, see ContactDetail.
      value:
        FirstName: "{{ FirstName }}"
        LastName: "{{ LastName }}"
        ContactType: "{{ ContactType }}"
        OrganizationName: "{{ OrganizationName }}"
        AddressLine1: "{{ AddressLine1 }}"
        AddressLine2: "{{ AddressLine2 }}"
        City: "{{ City }}"
        State: "{{ State }}"
        CountryCode: "{{ CountryCode }}"
        ZipCode: "{{ ZipCode }}"
        PhoneNumber: "{{ PhoneNumber }}"
        Email: "{{ Email }}"
        Fax: "{{ Fax }}"
        ExtraParams:
          - Name: "{{ Name }}"
            Value: "{{ Value }}"
    - name: PrivacyProtectAdminContact
      value: {{ PrivacyProtectAdminContact }}
      description: |
        Whether you want to conceal contact information from WHOIS queries. If you specify true, WHOIS ("who is") queries return contact information either for Amazon Registrar or for our registrar associate, Gandi. If you specify false, WHOIS queries return the information that you entered for the admin contact. You must specify the same privacy setting for the administrative, billing, registrant, and technical contacts. Default: true
    - name: PrivacyProtectRegistrantContact
      value: {{ PrivacyProtectRegistrantContact }}
      description: |
        Whether you want to conceal contact information from WHOIS queries. If you specify true, WHOIS ("who is") queries return contact information either for Amazon Registrar or for our registrar associate, Gandi. If you specify false, WHOIS queries return the information that you entered for the registrant contact (the domain owner). You must specify the same privacy setting for the administrative, billing, registrant, and technical contacts. Default: true
    - name: PrivacyProtectTechContact
      value: {{ PrivacyProtectTechContact }}
      description: |
        Whether you want to conceal contact information from WHOIS queries. If you specify true, WHOIS ("who is") queries return contact information either for Amazon Registrar or for our registrar associate, Gandi. If you specify false, WHOIS queries return the information that you entered for the technical contact. You must specify the same privacy setting for the administrative, billing, registrant, and technical contacts. Default: true
    - name: BillingContact
      description: |
        Provides detailed contact information. For information about the values that you specify for each element, see ContactDetail.
      value:
        FirstName: "{{ FirstName }}"
        LastName: "{{ LastName }}"
        ContactType: "{{ ContactType }}"
        OrganizationName: "{{ OrganizationName }}"
        AddressLine1: "{{ AddressLine1 }}"
        AddressLine2: "{{ AddressLine2 }}"
        City: "{{ City }}"
        State: "{{ State }}"
        CountryCode: "{{ CountryCode }}"
        ZipCode: "{{ ZipCode }}"
        PhoneNumber: "{{ PhoneNumber }}"
        Email: "{{ Email }}"
        Fax: "{{ Fax }}"
        ExtraParams:
          - Name: "{{ Name }}"
            Value: "{{ Value }}"
    - name: PrivacyProtectBillingContact
      value: {{ PrivacyProtectBillingContact }}
      description: |
        Whether you want to conceal contact information from WHOIS queries. If you specify true, WHOIS ("who is") queries return contact information either for Amazon Registrar or for our registrar associate, Gandi. If you specify false, WHOIS queries return the information that you entered for the billing contact. You must specify the same privacy setting for the administrative, billing, registrant, and technical contacts.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="associate_delegation_signer_to_domain"
    values={[
        { label: 'associate_delegation_signer_to_domain', value: 'associate_delegation_signer_to_domain' },
        { label: 'disassociate_delegation_signer_from_domain', value: 'disassociate_delegation_signer_from_domain' },
        { label: 'update_domain_nameservers', value: 'update_domain_nameservers' },
        { label: 'update_domain_contact', value: 'update_domain_contact' }
    ]}
>
<TabItem value="associate_delegation_signer_to_domain">

Creates a delegation signer (DS) record in the registry zone for this domain name. Note that creating DS record at the registry impacts DNSSEC validation of your DNS records. This action may render your domain name unavailable on the internet if the steps are completed in the wrong order, or with incorrect timing. For more information about DNSSEC signing, see Configuring DNSSEC signing in the Route 53 developer guide.

```sql
UPDATE aws.route53domains.domains
SET 
DomainName = '{{ DomainName }}',
SigningAttributes = '{{ SigningAttributes }}'
WHERE 
region = '{{ region }}' --required
AND DomainName = '{{ DomainName }}' --required
AND SigningAttributes = '{{ SigningAttributes }}' --required
RETURNING
OperationId;
```
</TabItem>
<TabItem value="disassociate_delegation_signer_from_domain">

Deletes a delegation signer (DS) record in the registry zone for this domain name.

```sql
UPDATE aws.route53domains.domains
SET 
DomainName = '{{ DomainName }}',
Id = '{{ Id }}'
WHERE 
region = '{{ region }}' --required
AND DomainName = '{{ DomainName }}' --required
AND Id = '{{ Id }}' --required
RETURNING
OperationId;
```
</TabItem>
<TabItem value="update_domain_nameservers">

This operation replaces the current set of name servers for the domain with the specified set of name servers. If you use Amazon Route 53 as your DNS service, specify the four name servers in the delegation set for the hosted zone for the domain. If successful, this operation returns an operation ID that you can use to track the progress and completion of the action. If the request is not completed successfully, the domain registrant will be notified by email.

```sql
UPDATE aws.route53domains.domains
SET 
DomainName = '{{ DomainName }}',
FIAuthKey = '{{ FIAuthKey }}',
Nameservers = '{{ Nameservers }}'
WHERE 
region = '{{ region }}' --required
AND DomainName = '{{ DomainName }}' --required
AND Nameservers = '{{ Nameservers }}' --required
RETURNING
OperationId;
```
</TabItem>
<TabItem value="update_domain_contact">

This operation updates the contact information for a particular domain. You must specify information for at least one contact: registrant, administrator, or technical. If the update is successful, this method returns an operation ID that you can use to track the progress and completion of the operation. If the request is not completed successfully, the domain registrant will be notified by email.

```sql
UPDATE aws.route53domains.domains
SET 
DomainName = '{{ DomainName }}',
AdminContact = '{{ AdminContact }}',
RegistrantContact = '{{ RegistrantContact }}',
TechContact = '{{ TechContact }}',
Consent = '{{ Consent }}',
BillingContact = '{{ BillingContact }}'
WHERE 
region = '{{ region }}' --required
AND DomainName = '{{ DomainName }}' --required
RETURNING
OperationId;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_tags_for_domain"
    values={[
        { label: 'delete_tags_for_domain', value: 'delete_tags_for_domain' },
        { label: 'delete_domain', value: 'delete_domain' }
    ]}
>
<TabItem value="delete_tags_for_domain">

This operation deletes the specified tags for a domain. All tag operations are eventually consistent; subsequent operations might not immediately represent all issued operations.

```sql
DELETE FROM aws.route53domains.domains
WHERE region = '{{ region }}' --required
;
```
</TabItem>
<TabItem value="delete_domain">

This operation deletes the specified domain. This action is permanent. For more information, see Deleting a domain name registration. To transfer the domain registration to another registrar, use the transfer process that’s provided by the registrar to which you want to transfer the registration. Otherwise, the following apply: You can’t get a refund for the cost of a deleted domain registration. The registry for the top-level domain might hold the domain name for a brief time before releasing it for other users to register (varies by registry). When the registration has been deleted, we'll send you a confirmation to the registrant contact. The email will come from noreply@domainnameverification.net or noreply@emailverification.info or noreply@registrar.amazon.

```sql
DELETE FROM aws.route53domains.domains
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="accept_domain_transfer_from_another_aws_account"
    values={[
        { label: 'accept_domain_transfer_from_another_aws_account', value: 'accept_domain_transfer_from_another_aws_account' },
        { label: 'cancel_domain_transfer_to_another_aws_account', value: 'cancel_domain_transfer_to_another_aws_account' },
        { label: 'check_domain_availability', value: 'check_domain_availability' },
        { label: 'check_domain_transferability', value: 'check_domain_transferability' },
        { label: 'disable_domain_auto_renew', value: 'disable_domain_auto_renew' },
        { label: 'disable_domain_transfer_lock', value: 'disable_domain_transfer_lock' },
        { label: 'enable_domain_auto_renew', value: 'enable_domain_auto_renew' },
        { label: 'enable_domain_transfer_lock', value: 'enable_domain_transfer_lock' },
        { label: 'push_domain', value: 'push_domain' },
        { label: 'reject_domain_transfer_from_another_aws_account', value: 'reject_domain_transfer_from_another_aws_account' },
        { label: 'renew_domain', value: 'renew_domain' },
        { label: 'retrieve_domain_auth_code', value: 'retrieve_domain_auth_code' },
        { label: 'transfer_domain', value: 'transfer_domain' },
        { label: 'transfer_domain_to_another_aws_account', value: 'transfer_domain_to_another_aws_account' },
        { label: 'update_domain_contact_privacy', value: 'update_domain_contact_privacy' },
        { label: 'update_tags_for_domain', value: 'update_tags_for_domain' }
    ]}
>
<TabItem value="accept_domain_transfer_from_another_aws_account">

Accepts the transfer of a domain from another Amazon Web Services account to the currentAmazon Web Services account. You initiate a transfer between Amazon Web Services accounts using TransferDomainToAnotherAwsAccount. If you use the CLI command at accept-domain-transfer-from-another-aws-account, use JSON format as input instead of text because otherwise CLI will throw an error from domain transfer input that includes single quotes. Use either ListOperations or GetOperationDetail to determine whether the operation succeeded. GetOperationDetail provides additional information, for example, Domain Transfer from Aws Account 111122223333 has been cancelled.

```sql
EXEC aws.route53domains.domains.accept_domain_transfer_from_another_aws_account 
@region='{{ region }}' --required 
@@json=
'{
"DomainName": "{{ DomainName }}", 
"Password": "{{ Password }}"
}'
;
```
</TabItem>
<TabItem value="cancel_domain_transfer_to_another_aws_account">

Cancels the transfer of a domain from the current Amazon Web Services account to another Amazon Web Services account. You initiate a transfer betweenAmazon Web Services accounts using TransferDomainToAnotherAwsAccount. You must cancel the transfer before the other Amazon Web Services account accepts the transfer using AcceptDomainTransferFromAnotherAwsAccount. Use either ListOperations or GetOperationDetail to determine whether the operation succeeded. GetOperationDetail provides additional information, for example, Domain Transfer from Aws Account 111122223333 has been cancelled.

```sql
EXEC aws.route53domains.domains.cancel_domain_transfer_to_another_aws_account 
@region='{{ region }}' --required 
@@json=
'{
"DomainName": "{{ DomainName }}"
}'
;
```
</TabItem>
<TabItem value="check_domain_availability">

This operation checks the availability of one domain name. Note that if the availability status of a domain is pending, you must submit another request to determine the availability of the domain name.

```sql
EXEC aws.route53domains.domains.check_domain_availability 
@region='{{ region }}' --required 
@@json=
'{
"DomainName": "{{ DomainName }}", 
"IdnLangCode": "{{ IdnLangCode }}"
}'
;
```
</TabItem>
<TabItem value="check_domain_transferability">

Checks whether a domain name can be transferred to Amazon Route 53.

```sql
EXEC aws.route53domains.domains.check_domain_transferability 
@region='{{ region }}' --required 
@@json=
'{
"DomainName": "{{ DomainName }}", 
"AuthCode": "{{ AuthCode }}"
}'
;
```
</TabItem>
<TabItem value="disable_domain_auto_renew">

This operation disables automatic renewal of domain registration for the specified domain.

```sql
EXEC aws.route53domains.domains.disable_domain_auto_renew 
@region='{{ region }}' --required 
@@json=
'{
"DomainName": "{{ DomainName }}"
}'
;
```
</TabItem>
<TabItem value="disable_domain_transfer_lock">

This operation removes the transfer lock on the domain (specifically the clientTransferProhibited status) to allow domain transfers. We recommend you refrain from performing this action unless you intend to transfer the domain to a different registrar. Successful submission returns an operation ID that you can use to track the progress and completion of the action. If the request is not completed successfully, the domain registrant will be notified by email.

```sql
EXEC aws.route53domains.domains.disable_domain_transfer_lock 
@region='{{ region }}' --required 
@@json=
'{
"DomainName": "{{ DomainName }}"
}'
;
```
</TabItem>
<TabItem value="enable_domain_auto_renew">

This operation configures Amazon Route 53 to automatically renew the specified domain before the domain registration expires. The cost of renewing your domain registration is billed to your Amazon Web Services account. The period during which you can renew a domain name varies by TLD. For a list of TLDs and their renewal policies, see Domains That You Can Register with Amazon Route 53 in the Amazon Route 53 Developer Guide. Route 53 requires that you renew before the end of the renewal period so we can complete processing before the deadline.

```sql
EXEC aws.route53domains.domains.enable_domain_auto_renew 
@region='{{ region }}' --required 
@@json=
'{
"DomainName": "{{ DomainName }}"
}'
;
```
</TabItem>
<TabItem value="enable_domain_transfer_lock">

This operation sets the transfer lock on the domain (specifically the clientTransferProhibited status) to prevent domain transfers. Successful submission returns an operation ID that you can use to track the progress and completion of the action. If the request is not completed successfully, the domain registrant will be notified by email.

```sql
EXEC aws.route53domains.domains.enable_domain_transfer_lock 
@region='{{ region }}' --required 
@@json=
'{
"DomainName": "{{ DomainName }}"
}'
;
```
</TabItem>
<TabItem value="push_domain">

Moves a domain from Amazon Web Services to another registrar. Supported actions: Changes the IPS tags of a .uk domain, and pushes it to transit. Transit means that the domain is ready to be transferred to another registrar.

```sql
EXEC aws.route53domains.domains.push_domain 
@region='{{ region }}' --required 
@@json=
'{
"DomainName": "{{ DomainName }}", 
"Target": "{{ Target }}"
}'
;
```
</TabItem>
<TabItem value="reject_domain_transfer_from_another_aws_account">

Rejects the transfer of a domain from another Amazon Web Services account to the current Amazon Web Services account. You initiate a transfer betweenAmazon Web Services accounts using TransferDomainToAnotherAwsAccount. Use either ListOperations or GetOperationDetail to determine whether the operation succeeded. GetOperationDetail provides additional information, for example, Domain Transfer from Aws Account 111122223333 has been cancelled.

```sql
EXEC aws.route53domains.domains.reject_domain_transfer_from_another_aws_account 
@region='{{ region }}' --required 
@@json=
'{
"DomainName": "{{ DomainName }}"
}'
;
```
</TabItem>
<TabItem value="renew_domain">

This operation renews a domain for the specified number of years. The cost of renewing your domain is billed to your Amazon Web Services account. We recommend that you renew your domain several weeks before the expiration date. Some TLD registries delete domains before the expiration date if you haven't renewed far enough in advance. For more information about renewing domain registration, see Renewing Registration for a Domain in the Amazon Route 53 Developer Guide.

```sql
EXEC aws.route53domains.domains.renew_domain 
@region='{{ region }}' --required 
@@json=
'{
"DomainName": "{{ DomainName }}", 
"DurationInYears": {{ DurationInYears }}, 
"CurrentExpiryYear": {{ CurrentExpiryYear }}
}'
;
```
</TabItem>
<TabItem value="retrieve_domain_auth_code">

This operation returns the authorization code for the domain. To transfer a domain to another registrar, you provide this value to the new registrar.

```sql
EXEC aws.route53domains.domains.retrieve_domain_auth_code 
@region='{{ region }}' --required 
@@json=
'{
"DomainName": "{{ DomainName }}"
}'
;
```
</TabItem>
<TabItem value="transfer_domain">

Transfers a domain from another registrar to Amazon Route 53. For more information about transferring domains, see the following topics: For transfer requirements, a detailed procedure, and information about viewing the status of a domain that you're transferring to Route 53, see Transferring Registration for a Domain to Amazon Route 53 in the Amazon Route 53 Developer Guide. For information about how to transfer a domain from one Amazon Web Services account to another, see TransferDomainToAnotherAwsAccount. For information about how to transfer a domain to another domain registrar, see Transferring a Domain from Amazon Route 53 to Another Registrar in the Amazon Route 53 Developer Guide. During the transfer of any country code top-level domains (ccTLDs) to Route 53, except for .cc and .tv, updates to the owner contact are ignored and the owner contact data from the registry is used. You can update the owner contact after the transfer is complete. For more information, see UpdateDomainContact. If the registrar for your domain is also the DNS service provider for the domain, we highly recommend that you transfer your DNS service to Route 53 or to another DNS service provider before you transfer your registration. Some registrars provide free DNS service when you purchase a domain registration. When you transfer the registration, the previous registrar will not renew your domain registration and could end your DNS service at any time. If the registrar for your domain is also the DNS service provider for the domain and you don't transfer DNS service to another provider, your website, email, and the web applications associated with the domain might become unavailable. If the transfer is successful, this method returns an operation ID that you can use to track the progress and completion of the action. If the transfer doesn't complete successfully, the domain registrant will be notified by email.

```sql
EXEC aws.route53domains.domains.transfer_domain 
@region='{{ region }}' --required 
@@json=
'{
"DomainName": "{{ DomainName }}", 
"IdnLangCode": "{{ IdnLangCode }}", 
"DurationInYears": {{ DurationInYears }}, 
"Nameservers": "{{ Nameservers }}", 
"AuthCode": "{{ AuthCode }}", 
"AutoRenew": {{ AutoRenew }}, 
"AdminContact": "{{ AdminContact }}", 
"RegistrantContact": "{{ RegistrantContact }}", 
"TechContact": "{{ TechContact }}", 
"PrivacyProtectAdminContact": {{ PrivacyProtectAdminContact }}, 
"PrivacyProtectRegistrantContact": {{ PrivacyProtectRegistrantContact }}, 
"PrivacyProtectTechContact": {{ PrivacyProtectTechContact }}, 
"BillingContact": "{{ BillingContact }}", 
"PrivacyProtectBillingContact": {{ PrivacyProtectBillingContact }}
}'
;
```
</TabItem>
<TabItem value="transfer_domain_to_another_aws_account">

Transfers a domain from the current Amazon Web Services account to another Amazon Web Services account. Note the following: The Amazon Web Services account that you're transferring the domain to must accept the transfer. If the other account doesn't accept the transfer within 3 days, we cancel the transfer. See AcceptDomainTransferFromAnotherAwsAccount. You can cancel the transfer before the other account accepts it. See CancelDomainTransferToAnotherAwsAccount. The other account can reject the transfer. See RejectDomainTransferFromAnotherAwsAccount. When you transfer a domain from one Amazon Web Services account to another, Route 53 doesn't transfer the hosted zone that is associated with the domain. DNS resolution isn't affected if the domain and the hosted zone are owned by separate accounts, so transferring the hosted zone is optional. For information about transferring the hosted zone to another Amazon Web Services account, see Migrating a Hosted Zone to a Different Amazon Web Services Account in the Amazon Route 53 Developer Guide. Use either ListOperations or GetOperationDetail to determine whether the operation succeeded. GetOperationDetail provides additional information, for example, Domain Transfer from Aws Account 111122223333 has been cancelled.

```sql
EXEC aws.route53domains.domains.transfer_domain_to_another_aws_account 
@region='{{ region }}' --required 
@@json=
'{
"DomainName": "{{ DomainName }}", 
"AccountId": "{{ AccountId }}"
}'
;
```
</TabItem>
<TabItem value="update_domain_contact_privacy">

This operation updates the specified domain contact's privacy setting. When privacy protection is enabled, your contact information is replaced with contact information for the registrar or with the phrase "REDACTED FOR PRIVACY", or "On behalf of &lt;domain name&gt; owner." While some domains may allow different privacy settings per contact, we recommend specifying the same privacy setting for all contacts. This operation affects only the contact information for the specified contact type (administrative, registrant, or technical). If the request succeeds, Amazon Route 53 returns an operation ID that you can use with GetOperationDetail to track the progress and completion of the action. If the request doesn't complete successfully, the domain registrant will be notified by email. By disabling the privacy service via API, you consent to the publication of the contact information provided for this domain via the public WHOIS database. You certify that you are the registrant of this domain name and have the authority to make this decision. You may withdraw your consent at any time by enabling privacy protection using either UpdateDomainContactPrivacy or the Route 53 console. Enabling privacy protection removes the contact information provided for this domain from the WHOIS database. For more information on our privacy practices, see https://aws.amazon.com/privacy/.

```sql
EXEC aws.route53domains.domains.update_domain_contact_privacy 
@region='{{ region }}' --required 
@@json=
'{
"DomainName": "{{ DomainName }}", 
"AdminPrivacy": {{ AdminPrivacy }}, 
"RegistrantPrivacy": {{ RegistrantPrivacy }}, 
"TechPrivacy": {{ TechPrivacy }}, 
"BillingPrivacy": {{ BillingPrivacy }}
}'
;
```
</TabItem>
<TabItem value="update_tags_for_domain">

This operation adds or updates tags for a specified domain. All tag operations are eventually consistent; subsequent operations might not immediately represent all issued operations.

```sql
EXEC aws.route53domains.domains.update_tags_for_domain 
@region='{{ region }}' --required 
@@json=
'{
"DomainName": "{{ DomainName }}", 
"TagsToUpdate": "{{ TagsToUpdate }}"
}'
;
```
</TabItem>
</Tabs>
