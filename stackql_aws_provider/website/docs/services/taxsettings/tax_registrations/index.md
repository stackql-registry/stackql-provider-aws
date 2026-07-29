--- 
title: tax_registrations
hide_title: false
hide_table_of_contents: false
keywords:
  - tax_registrations
  - taxsettings
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

Creates, updates, deletes, gets or lists a <code>tax_registrations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="tax_registrations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.taxsettings.tax_registrations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_tax_registration"
    values={[
        { label: 'get_tax_registration', value: 'get_tax_registration' }
    ]}
>
<TabItem value="get_tax_registration">

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
    <td><CopyableCode code="additional_tax_information" /></td>
    <td><code>object</code></td>
    <td>Additional tax information associated with your TRN.</td>
</tr>
<tr>
    <td><CopyableCode code="certified_email_id" /></td>
    <td><code>string</code></td>
    <td>The email address to receive VAT invoices. (pattern: &lt;code&gt;^&#91;A-Za-z0-9._%+-&#93;+@&#91;A-Za-z0-9.-&#93;+\.&#91;A-Za-z&#93;&#123;2,20&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="legal_address" /></td>
    <td><code>object</code></td>
    <td>The legal address associated with your TRN registration.</td>
</tr>
<tr>
    <td><CopyableCode code="legal_name" /></td>
    <td><code>string</code></td>
    <td>The legal name associated with your TRN registration. (pattern: &lt;code&gt;^(?!\s*$)&#91;\s\S&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="registration_id" /></td>
    <td><code>string</code></td>
    <td>Your tax registration unique identifier. (pattern: &lt;code&gt;^(?!\s*$)&#91;\s\S&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="registration_type" /></td>
    <td><code>string</code></td>
    <td>Type of your tax registration. (VAT, GST, CPF, CNPJ, SST, TIN, NRIC)</td>
</tr>
<tr>
    <td><CopyableCode code="sector" /></td>
    <td><code>string</code></td>
    <td>The industry that describes your business. For business-to-business (B2B) customers, specify Business. For business-to-consumer (B2C) customers, specify Individual. For business-to-government (B2G), specify Government. Note that certain values may not applicable for the request country. Please refer to country specific information in API document. (Business, Individual, Government)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of your TRN. This can be either Verified, Pending, Deleted, or Rejected. (Verified, Pending, Deleted, Rejected)</td>
</tr>
<tr>
    <td><CopyableCode code="tax_document_metadatas" /></td>
    <td><code>array</code></td>
    <td>The metadata for your tax document.</td>
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
    <td><a href="#get_tax_registration"><CopyableCode code="get_tax_registration" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves tax registration for a single account.</td>
</tr>
<tr>
    <td><a href="#put_tax_registration"><CopyableCode code="put_tax_registration" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-taxRegistrationEntry"><code>taxRegistrationEntry</code></a></td>
    <td></td>
    <td>Adds or updates tax registration for a single account. You can't set a TRN if there's a pending TRN. You'll need to delete the pending TRN first. To call this API operation for specific countries, see the following country-specific requirements. Bangladesh You must specify the tax registration certificate document in the taxRegistrationDocuments field of the VerificationDetails object. Brazil You must complete the tax registration process in the Payment preferences page in the Billing and Cost Management console. After your TRN and billing address are verified, you can call this API operation. For Amazon Web Services accounts created through Organizations, you can call this API operation when you don't have a billing address. Georgia The valid personType values are Physical Person and Business. Indonesia PutTaxRegistration: The use of this operation to submit tax information is subject to the Amazon Web Services service terms. By submitting, you’re providing consent for Amazon Web Services to validate NIK, NPWP, and NITKU data, provided by you with the Directorate General of Taxes of Indonesia in accordance with the Minister of Finance Regulation (PMK) Number 112/PMK.03/2022. BatchPutTaxRegistration: The use of this operation to submit tax information is subject to the Amazon Web Services service terms. By submitting, you’re providing consent for Amazon Web Services to validate NIK, NPWP, and NITKU data, provided by you with the Directorate General of Taxes of Indonesia in accordance with the Minister of Finance Regulation (PMK) Number 112/PMK.03/2022, through our third-party partner PT Achilles Advanced Management (OnlinePajak). You must specify the taxRegistrationNumberType in the indonesiaAdditionalInfo field of the additionalTaxInformation object. If you specify decisionNumber, you must specify the ppnExceptionDesignationCode in the indonesiaAdditionalInfo field of the additionalTaxInformation object. If the taxRegistrationNumberType is set to NPWP or NITKU, valid values for ppnExceptionDesignationCode are either 01, 02, 03, 07, or 08. For other taxRegistrationNumberType values, ppnExceptionDesignationCode must be either 01, 07, or 08. If ppnExceptionDesignationCode is 07, you must specify the decisionNumber in the indonesiaAdditionalInfo field of the additionalTaxInformation object. Kenya You must specify the personType in the kenyaAdditionalInfo field of the additionalTaxInformation object. If the personType is Physical Person, you must specify the tax registration certificate document in the taxRegistrationDocuments field of the VerificationDetails object. Malaysia The sector valid values are Business and Individual. RegistrationType valid values are NRIC for individual, and TIN and sales and service tax (SST) for Business. For individual, you can specify the taxInformationNumber in MalaysiaAdditionalInfo with NRIC type, and a valid MyKad or NRIC number. For business, you must specify a businessRegistrationNumber in MalaysiaAdditionalInfo with a TIN type and tax identification number. For business resellers, you must specify a businessRegistrationNumber and taxInformationNumber in MalaysiaAdditionalInfo with a sales and service tax (SST) type and a valid SST number. For business resellers with service codes, you must specify businessRegistrationNumber, taxInformationNumber, and distinct serviceTaxCodes in MalaysiaAdditionalInfo with a SST type and valid sales and service tax (SST) number. By using this API operation, Amazon Web Services registers your self-declaration that you’re an authorized business reseller registered with the Royal Malaysia Customs Department (RMCD), and have a valid SST number. Amazon Web Services reserves the right to seek additional information and/or take other actions to support your self-declaration as appropriate. Amazon Web Services is currently registered under the following service tax codes. You must include at least one of the service tax codes in the service tax code strings to declare yourself as an authorized registered business reseller. Taxable service and service tax codes: Consultancy - 9907061674 Training or coaching service - 9907071685 IT service - 9907101676 Digital services and electronic medium - 9907121690 Nepal The sector valid values are Business and Individual. Saudi Arabia For address, you must specify addressLine3. South Korea You must specify the certifiedEmailId and legalName in the TaxRegistrationEntry object. Use Korean characters for legalName. You must specify the businessRepresentativeName, itemOfBusiness, and lineOfBusiness in the southKoreaAdditionalInfo field of the additionalTaxInformation object. Use Korean characters for these fields. You must specify the tax registration certificate document in the taxRegistrationDocuments field of the VerificationDetails object. For the address object, use Korean characters for addressLine1, addressLine2 city, postalCode, and stateOrRegion. Spain You must specify the registrationType in the spainAdditionalInfo field of the additionalTaxInformation object. If the registrationType is Local, you must specify the tax registration certificate document in the taxRegistrationDocuments field of the VerificationDetails object. Turkey You must specify the sector in the taxRegistrationEntry object. If your sector is Business, Individual, or Government: Specify the taxOffice. If your sector is Individual, don't enter this value. (Optional) Specify the kepEmailId. If your sector is Individual, don't enter this value. Note: In the Tax Settings page of the Billing console, Government appears as Public institutions If your sector is Business and you're subject to KDV tax, you must specify your industry in the industries field. For address, you must specify districtOrCounty. Ukraine The sector valid values are Business and Individual.</td>
</tr>
<tr>
    <td><a href="#delete_tax_registration"><CopyableCode code="delete_tax_registration" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes tax registration for a single account. This API operation can't be used to delete your tax registration in Brazil. Use the Payment preferences page in the Billing and Cost Management console instead.</td>
</tr>
<tr>
    <td><a href="#list_tax_registrations"><CopyableCode code="list_tax_registrations" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves the tax registration of accounts listed in a consolidated billing family. This can be used to retrieve up to 100 accounts' tax registrations in one call (default 50).</td>
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
    defaultValue="get_tax_registration"
    values={[
        { label: 'get_tax_registration', value: 'get_tax_registration' }
    ]}
>
<TabItem value="get_tax_registration">

Retrieves tax registration for a single account.

```sql
SELECT
additional_tax_information,
certified_email_id,
legal_address,
legal_name,
registration_id,
registration_type,
sector,
status,
tax_document_metadatas
FROM aws.taxsettings.tax_registrations
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="put_tax_registration"
    values={[
        { label: 'put_tax_registration', value: 'put_tax_registration' }
    ]}
>
<TabItem value="put_tax_registration">

Adds or updates tax registration for a single account. You can't set a TRN if there's a pending TRN. You'll need to delete the pending TRN first. To call this API operation for specific countries, see the following country-specific requirements. Bangladesh You must specify the tax registration certificate document in the taxRegistrationDocuments field of the VerificationDetails object. Brazil You must complete the tax registration process in the Payment preferences page in the Billing and Cost Management console. After your TRN and billing address are verified, you can call this API operation. For Amazon Web Services accounts created through Organizations, you can call this API operation when you don't have a billing address. Georgia The valid personType values are Physical Person and Business. Indonesia PutTaxRegistration: The use of this operation to submit tax information is subject to the Amazon Web Services service terms. By submitting, you’re providing consent for Amazon Web Services to validate NIK, NPWP, and NITKU data, provided by you with the Directorate General of Taxes of Indonesia in accordance with the Minister of Finance Regulation (PMK) Number 112/PMK.03/2022. BatchPutTaxRegistration: The use of this operation to submit tax information is subject to the Amazon Web Services service terms. By submitting, you’re providing consent for Amazon Web Services to validate NIK, NPWP, and NITKU data, provided by you with the Directorate General of Taxes of Indonesia in accordance with the Minister of Finance Regulation (PMK) Number 112/PMK.03/2022, through our third-party partner PT Achilles Advanced Management (OnlinePajak). You must specify the taxRegistrationNumberType in the indonesiaAdditionalInfo field of the additionalTaxInformation object. If you specify decisionNumber, you must specify the ppnExceptionDesignationCode in the indonesiaAdditionalInfo field of the additionalTaxInformation object. If the taxRegistrationNumberType is set to NPWP or NITKU, valid values for ppnExceptionDesignationCode are either 01, 02, 03, 07, or 08. For other taxRegistrationNumberType values, ppnExceptionDesignationCode must be either 01, 07, or 08. If ppnExceptionDesignationCode is 07, you must specify the decisionNumber in the indonesiaAdditionalInfo field of the additionalTaxInformation object. Kenya You must specify the personType in the kenyaAdditionalInfo field of the additionalTaxInformation object. If the personType is Physical Person, you must specify the tax registration certificate document in the taxRegistrationDocuments field of the VerificationDetails object. Malaysia The sector valid values are Business and Individual. RegistrationType valid values are NRIC for individual, and TIN and sales and service tax (SST) for Business. For individual, you can specify the taxInformationNumber in MalaysiaAdditionalInfo with NRIC type, and a valid MyKad or NRIC number. For business, you must specify a businessRegistrationNumber in MalaysiaAdditionalInfo with a TIN type and tax identification number. For business resellers, you must specify a businessRegistrationNumber and taxInformationNumber in MalaysiaAdditionalInfo with a sales and service tax (SST) type and a valid SST number. For business resellers with service codes, you must specify businessRegistrationNumber, taxInformationNumber, and distinct serviceTaxCodes in MalaysiaAdditionalInfo with a SST type and valid sales and service tax (SST) number. By using this API operation, Amazon Web Services registers your self-declaration that you’re an authorized business reseller registered with the Royal Malaysia Customs Department (RMCD), and have a valid SST number. Amazon Web Services reserves the right to seek additional information and/or take other actions to support your self-declaration as appropriate. Amazon Web Services is currently registered under the following service tax codes. You must include at least one of the service tax codes in the service tax code strings to declare yourself as an authorized registered business reseller. Taxable service and service tax codes: Consultancy - 9907061674 Training or coaching service - 9907071685 IT service - 9907101676 Digital services and electronic medium - 9907121690 Nepal The sector valid values are Business and Individual. Saudi Arabia For address, you must specify addressLine3. South Korea You must specify the certifiedEmailId and legalName in the TaxRegistrationEntry object. Use Korean characters for legalName. You must specify the businessRepresentativeName, itemOfBusiness, and lineOfBusiness in the southKoreaAdditionalInfo field of the additionalTaxInformation object. Use Korean characters for these fields. You must specify the tax registration certificate document in the taxRegistrationDocuments field of the VerificationDetails object. For the address object, use Korean characters for addressLine1, addressLine2 city, postalCode, and stateOrRegion. Spain You must specify the registrationType in the spainAdditionalInfo field of the additionalTaxInformation object. If the registrationType is Local, you must specify the tax registration certificate document in the taxRegistrationDocuments field of the VerificationDetails object. Turkey You must specify the sector in the taxRegistrationEntry object. If your sector is Business, Individual, or Government: Specify the taxOffice. If your sector is Individual, don't enter this value. (Optional) Specify the kepEmailId. If your sector is Individual, don't enter this value. Note: In the Tax Settings page of the Billing console, Government appears as Public institutions If your sector is Business and you're subject to KDV tax, you must specify your industry in the industries field. For address, you must specify districtOrCounty. Ukraine The sector valid values are Business and Individual.

```sql
REPLACE aws.taxsettings.tax_registrations
SET 
accountId = '{{ accountId }}',
taxRegistrationEntry = '{{ taxRegistrationEntry }}'
WHERE 
region = '{{ region }}' --required
AND taxRegistrationEntry = '{{ taxRegistrationEntry }}' --required
RETURNING
status;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_tax_registration"
    values={[
        { label: 'delete_tax_registration', value: 'delete_tax_registration' }
    ]}
>
<TabItem value="delete_tax_registration">

Deletes tax registration for a single account. This API operation can't be used to delete your tax registration in Brazil. Use the Payment preferences page in the Billing and Cost Management console instead.

```sql
DELETE FROM aws.taxsettings.tax_registrations
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="list_tax_registrations"
    values={[
        { label: 'list_tax_registrations', value: 'list_tax_registrations' }
    ]}
>
<TabItem value="list_tax_registrations">

Retrieves the tax registration of accounts listed in a consolidated billing family. This can be used to retrieve up to 100 accounts' tax registrations in one call (default 50).

```sql
EXEC aws.taxsettings.tax_registrations.list_tax_registrations 
@region='{{ region }}' --required 
@@json=
'{
"maxResults": {{ maxResults }}, 
"nextToken": "{{ nextToken }}"
}'
;
```
</TabItem>
</Tabs>
