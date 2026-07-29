--- 
title: certificates
hide_title: false
hide_table_of_contents: false
keywords:
  - certificates
  - acm
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

Creates, updates, deletes, gets or lists a <code>certificates</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="certificates" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.acm.certificates" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_certificate"
    values={[
        { label: 'describe_certificate', value: 'describe_certificate' },
        { label: 'list_certificates', value: 'list_certificates' }
    ]}
>
<TabItem value="describe_certificate">

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
    <td><CopyableCode code="certificate_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the certificate. For more information about ARNs, see Amazon Resource Names (ARNs) in the Amazon Web Services General Reference. (pattern: &lt;code&gt;arn:&#91;\w+=/,.@-&#93;+:acm:&#91;\w+=/,.@-&#93;*:&#91;0-9&#93;+:&#91;\w+=,.@-&#93;+(/&#91;\w+=,.@-&#93;+)*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="certificate_authority_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the private certificate authority (CA) that issued the certificate. This has the following format: arn:aws:acm-pca:region:account:certificate-authority/12345678-1234-1234-1234-123456789012 (pattern: &lt;code&gt;arn:&#91;\w+=/,.@-&#93;+:acm:&#91;\w+=/,.@-&#93;*:&#91;0-9&#93;+:&#91;\w+=,.@-&#93;+(/&#91;\w+=,.@-&#93;+)*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time at which the certificate was requested.</td>
</tr>
<tr>
    <td><CopyableCode code="domain_name" /></td>
    <td><code>string</code></td>
    <td>The fully qualified domain name for the certificate, such as www.example.com or example.com. (pattern: &lt;code&gt;(\*\.)?(((?!-)&#91;A-Za-z0-9-&#93;&#123;0,62&#125;&#91;A-Za-z0-9&#93;)\.)+((?!-)&#91;A-Za-z0-9-&#93;&#123;1,62&#125;&#91;A-Za-z0-9&#93;)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="domain_validation_options" /></td>
    <td><code>array</code></td>
    <td>Contains information about the initial validation of each domain name that occurs as a result of the RequestCertificate request. This field exists only when the certificate type is AMAZON_ISSUED.</td>
</tr>
<tr>
    <td><CopyableCode code="extended_key_usages" /></td>
    <td><code>array</code></td>
    <td>Contains a list of Extended Key Usage X.509 v3 extension objects. Each object specifies a purpose for which the certificate public key can be used and consists of a name and an object identifier (OID).</td>
</tr>
<tr>
    <td><CopyableCode code="failure_reason" /></td>
    <td><code>string</code></td>
    <td>The reason the certificate request failed. This value exists only when the certificate status is FAILED. For more information, see Certificate Request Failed in the Certificate Manager User Guide. (NO_AVAILABLE_CONTACTS, ADDITIONAL_VERIFICATION_REQUIRED, DOMAIN_NOT_ALLOWED, INVALID_PUBLIC_DOMAIN, DOMAIN_VALIDATION_DENIED, CAA_ERROR, PCA_LIMIT_EXCEEDED, PCA_INVALID_ARN, PCA_INVALID_STATE, PCA_REQUEST_FAILED, PCA_NAME_CONSTRAINTS_VALIDATION, PCA_RESOURCE_NOT_FOUND, PCA_INVALID_ARGS, PCA_INVALID_DURATION, PCA_ACCESS_DENIED, SLR_NOT_FOUND, OTHER)</td>
</tr>
<tr>
    <td><CopyableCode code="imported_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time when the certificate was imported. This value exists only when the certificate type is IMPORTED.</td>
</tr>
<tr>
    <td><CopyableCode code="in_use_by" /></td>
    <td><code>array</code></td>
    <td>A list of ARNs for the Amazon Web Services resources that are using the certificate. A certificate can be used by multiple Amazon Web Services resources.</td>
</tr>
<tr>
    <td><CopyableCode code="issued_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time at which the certificate was issued. This value exists only when the certificate type is AMAZON_ISSUED.</td>
</tr>
<tr>
    <td><CopyableCode code="issuer" /></td>
    <td><code>string</code></td>
    <td>The name of the certificate authority that issued and signed the certificate.</td>
</tr>
<tr>
    <td><CopyableCode code="key_algorithm" /></td>
    <td><code>string</code></td>
    <td>The algorithm that was used to generate the public-private key pair. (RSA_1024, RSA_2048, RSA_3072, RSA_4096, EC_prime256v1, EC_secp384r1, EC_secp521r1)</td>
</tr>
<tr>
    <td><CopyableCode code="key_usages" /></td>
    <td><code>array</code></td>
    <td>A list of Key Usage X.509 v3 extension objects. Each object is a string value that identifies the purpose of the public key contained in the certificate. Possible extension values include DIGITAL_SIGNATURE, KEY_ENCHIPHERMENT, NON_REPUDIATION, and more.</td>
</tr>
<tr>
    <td><CopyableCode code="managed_by" /></td>
    <td><code>string</code></td>
    <td>Identifies the Amazon Web Services service that manages the certificate issued by ACM. (CLOUDFRONT)</td>
</tr>
<tr>
    <td><CopyableCode code="not_after" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time after which the certificate is not valid.</td>
</tr>
<tr>
    <td><CopyableCode code="not_before" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time before which the certificate is not valid.</td>
</tr>
<tr>
    <td><CopyableCode code="options" /></td>
    <td><code>object</code></td>
    <td>Value that specifies whether to add the certificate to a transparency log. Certificate transparency makes it possible to detect SSL certificates that have been mistakenly or maliciously issued. A browser might respond to certificate that has not been logged by showing an error message. The logs are cryptographically secure.</td>
</tr>
<tr>
    <td><CopyableCode code="renewal_eligibility" /></td>
    <td><code>string</code></td>
    <td>Specifies whether the certificate is eligible for renewal. At this time, only exported private certificates can be renewed with the RenewCertificate command. (ELIGIBLE, INELIGIBLE)</td>
</tr>
<tr>
    <td><CopyableCode code="renewal_summary" /></td>
    <td><code>object</code></td>
    <td>Contains information about the status of ACM's managed renewal for the certificate. This field exists only when the certificate type is AMAZON_ISSUED.</td>
</tr>
<tr>
    <td><CopyableCode code="revocation_reason" /></td>
    <td><code>string</code></td>
    <td>The reason the certificate was revoked. This value exists only when the certificate status is REVOKED. (UNSPECIFIED, KEY_COMPROMISE, CA_COMPROMISE, AFFILIATION_CHANGED, SUPERCEDED, SUPERSEDED, CESSATION_OF_OPERATION, CERTIFICATE_HOLD, REMOVE_FROM_CRL, PRIVILEGE_WITHDRAWN, A_A_COMPROMISE)</td>
</tr>
<tr>
    <td><CopyableCode code="revoked_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time at which the certificate was revoked. This value exists only when the certificate status is REVOKED.</td>
</tr>
<tr>
    <td><CopyableCode code="serial" /></td>
    <td><code>string</code></td>
    <td>The serial number of the certificate.</td>
</tr>
<tr>
    <td><CopyableCode code="signature_algorithm" /></td>
    <td><code>string</code></td>
    <td>The algorithm that was used to sign the certificate.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the certificate. A certificate enters status PENDING_VALIDATION upon being requested, unless it fails for any of the reasons given in the troubleshooting topic Certificate request fails. ACM makes repeated attempts to validate a certificate for 72 hours and then times out. If a certificate shows status FAILED or VALIDATION_TIMED_OUT, delete the request, correct the issue with DNS validation or Email validation, and try again. If validation succeeds, the certificate enters status ISSUED. (PENDING_VALIDATION, ISSUED, INACTIVE, EXPIRED, VALIDATION_TIMED_OUT, REVOKED, FAILED)</td>
</tr>
<tr>
    <td><CopyableCode code="subject" /></td>
    <td><code>string</code></td>
    <td>The name of the entity that is associated with the public key contained in the certificate.</td>
</tr>
<tr>
    <td><CopyableCode code="subject_alternative_names" /></td>
    <td><code>array</code></td>
    <td>One or more domain names (subject alternative names) included in the certificate. This list contains the domain names that are bound to the public key that is contained in the certificate. The subject alternative names include the canonical domain name (CN) of the certificate and additional domain names that can be used to connect to the website.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The source of the certificate. For certificates provided by ACM, this value is AMAZON_ISSUED. For certificates that you imported with ImportCertificate, this value is IMPORTED. ACM does not provide managed renewal for imported certificates. For more information about the differences between certificates that you import and those that ACM provides, see Importing Certificates in the Certificate Manager User Guide. (IMPORTED, AMAZON_ISSUED, PRIVATE)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_certificates">

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
    <td><CopyableCode code="certificate_arn" /></td>
    <td><code>string</code></td>
    <td>Amazon Resource Name (ARN) of the certificate. This is of the form: arn:aws:acm:region:123456789012:certificate/12345678-1234-1234-1234-123456789012 For more information about ARNs, see Amazon Resource Names (ARNs). (pattern: &lt;code&gt;arn:&#91;\w+=/,.@-&#93;+:acm:&#91;\w+=/,.@-&#93;*:&#91;0-9&#93;+:&#91;\w+=,.@-&#93;+(/&#91;\w+=,.@-&#93;+)*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time at which the certificate was requested.</td>
</tr>
<tr>
    <td><CopyableCode code="domain_name" /></td>
    <td><code>string</code></td>
    <td>Fully qualified domain name (FQDN), such as www.example.com or example.com, for the certificate. (pattern: &lt;code&gt;(\*\.)?(((?!-)&#91;A-Za-z0-9-&#93;&#123;0,62&#125;&#91;A-Za-z0-9&#93;)\.)+((?!-)&#91;A-Za-z0-9-&#93;&#123;1,62&#125;&#91;A-Za-z0-9&#93;)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="export_option" /></td>
    <td><code>string</code></td>
    <td>Indicates if export is enabled for the certificate. (ENABLED, DISABLED)</td>
</tr>
<tr>
    <td><CopyableCode code="exported" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether the certificate has been exported. This value exists only when the certificate type is PRIVATE.</td>
</tr>
<tr>
    <td><CopyableCode code="extended_key_usages" /></td>
    <td><code>array</code></td>
    <td>Contains a list of Extended Key Usage X.509 v3 extension objects. Each object specifies a purpose for which the certificate public key can be used and consists of a name and an object identifier (OID).</td>
</tr>
<tr>
    <td><CopyableCode code="has_additional_subject_alternative_names" /></td>
    <td><code>boolean</code></td>
    <td>When called by ListCertificates, indicates whether the full list of subject alternative names has been included in the response. If false, the response includes all of the subject alternative names included in the certificate. If true, the response only includes the first 100 subject alternative names included in the certificate. To display the full list of subject alternative names, use DescribeCertificate.</td>
</tr>
<tr>
    <td><CopyableCode code="imported_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time when the certificate was imported. This value exists only when the certificate type is IMPORTED.</td>
</tr>
<tr>
    <td><CopyableCode code="in_use" /></td>
    <td><code>boolean</code></td>
    <td>Indicates whether the certificate is currently in use by any Amazon Web Services resources.</td>
</tr>
<tr>
    <td><CopyableCode code="issued_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time at which the certificate was issued. This value exists only when the certificate type is AMAZON_ISSUED.</td>
</tr>
<tr>
    <td><CopyableCode code="key_algorithm" /></td>
    <td><code>string</code></td>
    <td>The algorithm that was used to generate the public-private key pair. (RSA_1024, RSA_2048, RSA_3072, RSA_4096, EC_prime256v1, EC_secp384r1, EC_secp521r1)</td>
</tr>
<tr>
    <td><CopyableCode code="key_usages" /></td>
    <td><code>array</code></td>
    <td>A list of Key Usage X.509 v3 extension objects. Each object is a string value that identifies the purpose of the public key contained in the certificate. Possible extension values include DIGITAL_SIGNATURE, KEY_ENCHIPHERMENT, NON_REPUDIATION, and more.</td>
</tr>
<tr>
    <td><CopyableCode code="managed_by" /></td>
    <td><code>string</code></td>
    <td>Identifies the Amazon Web Services service that manages the certificate issued by ACM. (CLOUDFRONT)</td>
</tr>
<tr>
    <td><CopyableCode code="not_after" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time after which the certificate is not valid.</td>
</tr>
<tr>
    <td><CopyableCode code="not_before" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time before which the certificate is not valid.</td>
</tr>
<tr>
    <td><CopyableCode code="renewal_eligibility" /></td>
    <td><code>string</code></td>
    <td>Specifies whether the certificate is eligible for renewal. At this time, only exported private certificates can be renewed with the RenewCertificate command. (ELIGIBLE, INELIGIBLE)</td>
</tr>
<tr>
    <td><CopyableCode code="revoked_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time at which the certificate was revoked. This value exists only when the certificate status is REVOKED.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the certificate. A certificate enters status PENDING_VALIDATION upon being requested, unless it fails for any of the reasons given in the troubleshooting topic Certificate request fails. ACM makes repeated attempts to validate a certificate for 72 hours and then times out. If a certificate shows status FAILED or VALIDATION_TIMED_OUT, delete the request, correct the issue with DNS validation or Email validation, and try again. If validation succeeds, the certificate enters status ISSUED. (PENDING_VALIDATION, ISSUED, INACTIVE, EXPIRED, VALIDATION_TIMED_OUT, REVOKED, FAILED)</td>
</tr>
<tr>
    <td><CopyableCode code="subject_alternative_name_summaries" /></td>
    <td><code>array</code></td>
    <td>One or more domain names (subject alternative names) included in the certificate. This list contains the domain names that are bound to the public key that is contained in the certificate. The subject alternative names include the canonical domain name (CN) of the certificate and additional domain names that can be used to connect to the website. When called by ListCertificates, this parameter will only return the first 100 subject alternative names included in the certificate. To display the full list of subject alternative names, use DescribeCertificate.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The source of the certificate. For certificates provided by ACM, this value is AMAZON_ISSUED. For certificates that you imported with ImportCertificate, this value is IMPORTED. ACM does not provide managed renewal for imported certificates. For more information about the differences between certificates that you import and those that ACM provides, see Importing Certificates in the Certificate Manager User Guide. (IMPORTED, AMAZON_ISSUED, PRIVATE)</td>
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
    <td><a href="#describe_certificate"><CopyableCode code="describe_certificate" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns detailed metadata about the specified ACM certificate. If you have just created a certificate using the RequestCertificate action, there is a delay of several seconds before you can retrieve information about it.</td>
</tr>
<tr>
    <td><a href="#list_certificates"><CopyableCode code="list_certificates" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves a list of certificate ARNs and domain names. You can request that only certificates that match a specific status be listed. You can also filter by specific attributes of the certificate. Default filtering returns only RSA_2048 certificates. For more information, see Filters.</td>
</tr>
<tr>
    <td><a href="#revoke_certificate"><CopyableCode code="revoke_certificate" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-CertificateArn"><code>CertificateArn</code></a>, <a href="#parameter-RevocationReason"><code>RevocationReason</code></a></td>
    <td></td>
    <td>Revokes a public ACM certificate. You can only revoke certificates that have been previously exported. Once a certificate is revoked, you cannot reuse the certificate. Revoking a certificate is permanent.</td>
</tr>
<tr>
    <td><a href="#update_certificate_options"><CopyableCode code="update_certificate_options" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-CertificateArn"><code>CertificateArn</code></a>, <a href="#parameter-Options"><code>Options</code></a></td>
    <td></td>
    <td>Updates a certificate. You can use this function to specify whether to opt in to or out of recording your certificate in a certificate transparency log and exporting. For more information, see Opting Out of Certificate Transparency Logging and Certificate Manager Exportable Managed Certificates.</td>
</tr>
<tr>
    <td><a href="#delete_certificate"><CopyableCode code="delete_certificate" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a certificate and its associated private key. If this action succeeds, the certificate is not available for use by Amazon Web Services services integrated with ACM. Deleting a certificate is eventually consistent. The may be a short delay before the certificate no longer appears in the list that can be displayed by calling the ListCertificates action or be retrieved by calling the GetCertificate action. You cannot delete an ACM certificate that is being used by another Amazon Web Services service. To delete a certificate that is in use, you must first remove the certificate association using the console or the CLI for the associated service. Deleting a certificate issued by a private certificate authority (CA) has no effect on the CA. You will continue to be charged for the CA until it is deleted. For more information, see Deleting Your Private CA in the Private Certificate Authority User Guide. Deleting a certificate issued by a private certificate authority (CA) has no effect on the CA. You will continue to be charged for the CA until it is deleted. For more information, see Deleting your private CA in the Amazon Web Services Private Certificate Authority User Guide.</td>
</tr>
<tr>
    <td><a href="#get_certificate"><CopyableCode code="get_certificate" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-CertificateArn"><code>CertificateArn</code></a></td>
    <td></td>
    <td>Retrieves a certificate and its certificate chain. The certificate may be either a public or private certificate issued using the ACM RequestCertificate action, or a certificate imported into ACM using the ImportCertificate action. The chain consists of the certificate of the issuing CA and the intermediate certificates of any other subordinate CAs. All of the certificates are base64 encoded. You can use OpenSSL to decode the certificates and inspect individual fields.</td>
</tr>
<tr>
    <td><a href="#resend_validation_email"><CopyableCode code="resend_validation_email" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-CertificateArn"><code>CertificateArn</code></a>, <a href="#parameter-Domain"><code>Domain</code></a>, <a href="#parameter-ValidationDomain"><code>ValidationDomain</code></a></td>
    <td></td>
    <td>Resends the email that requests domain ownership validation. The domain owner or an authorized representative must approve the ACM certificate before it can be issued. The certificate can be approved by clicking a link in the mail to navigate to the Amazon certificate approval website and then clicking I Approve. However, the validation email can be blocked by spam filters. Therefore, if you do not receive the original mail, you can request that the mail be resent within 72 hours of requesting the ACM certificate. If more than 72 hours have elapsed since your original request or since your last attempt to resend validation mail, you must request a new certificate. For more information about setting up your contact email addresses, see Configure Email for your Domain.</td>
</tr>
<tr>
    <td><a href="#search_certificates"><CopyableCode code="search_certificates" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves a list of certificates matching search criteria. You can filter certificates by X.509 attributes and ACM specific properties like certificate status, type and renewal eligibility. This operation provides more flexible filtering than ListCertificates by supporting complex filter statements.</td>
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
    defaultValue="describe_certificate"
    values={[
        { label: 'describe_certificate', value: 'describe_certificate' },
        { label: 'list_certificates', value: 'list_certificates' }
    ]}
>
<TabItem value="describe_certificate">

Returns detailed metadata about the specified ACM certificate. If you have just created a certificate using the RequestCertificate action, there is a delay of several seconds before you can retrieve information about it.

```sql
SELECT
certificate_arn,
certificate_authority_arn,
created_at,
domain_name,
domain_validation_options,
extended_key_usages,
failure_reason,
imported_at,
in_use_by,
issued_at,
issuer,
key_algorithm,
key_usages,
managed_by,
not_after,
not_before,
options,
renewal_eligibility,
renewal_summary,
revocation_reason,
revoked_at,
serial,
signature_algorithm,
status,
subject,
subject_alternative_names,
type
FROM aws.acm.certificates
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_certificates">

Retrieves a list of certificate ARNs and domain names. You can request that only certificates that match a specific status be listed. You can also filter by specific attributes of the certificate. Default filtering returns only RSA_2048 certificates. For more information, see Filters.

```sql
SELECT
certificate_arn,
created_at,
domain_name,
export_option,
exported,
extended_key_usages,
has_additional_subject_alternative_names,
imported_at,
in_use,
issued_at,
key_algorithm,
key_usages,
managed_by,
not_after,
not_before,
renewal_eligibility,
revoked_at,
status,
subject_alternative_name_summaries,
type
FROM aws.acm.certificates
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="revoke_certificate"
    values={[
        { label: 'revoke_certificate', value: 'revoke_certificate' },
        { label: 'update_certificate_options', value: 'update_certificate_options' }
    ]}
>
<TabItem value="revoke_certificate">

Revokes a public ACM certificate. You can only revoke certificates that have been previously exported. Once a certificate is revoked, you cannot reuse the certificate. Revoking a certificate is permanent.

```sql
UPDATE aws.acm.certificates
SET 
CertificateArn = '{{ CertificateArn }}',
RevocationReason = '{{ RevocationReason }}'
WHERE 
region = '{{ region }}' --required
AND CertificateArn = '{{ CertificateArn }}' --required
AND RevocationReason = '{{ RevocationReason }}' --required
RETURNING
certificate_arn;
```
</TabItem>
<TabItem value="update_certificate_options">

Updates a certificate. You can use this function to specify whether to opt in to or out of recording your certificate in a certificate transparency log and exporting. For more information, see Opting Out of Certificate Transparency Logging and Certificate Manager Exportable Managed Certificates.

```sql
UPDATE aws.acm.certificates
SET 
CertificateArn = '{{ CertificateArn }}',
Options = '{{ Options }}'
WHERE 
region = '{{ region }}' --required
AND CertificateArn = '{{ CertificateArn }}' --required
AND Options = '{{ Options }}' --required;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_certificate"
    values={[
        { label: 'delete_certificate', value: 'delete_certificate' }
    ]}
>
<TabItem value="delete_certificate">

Deletes a certificate and its associated private key. If this action succeeds, the certificate is not available for use by Amazon Web Services services integrated with ACM. Deleting a certificate is eventually consistent. The may be a short delay before the certificate no longer appears in the list that can be displayed by calling the ListCertificates action or be retrieved by calling the GetCertificate action. You cannot delete an ACM certificate that is being used by another Amazon Web Services service. To delete a certificate that is in use, you must first remove the certificate association using the console or the CLI for the associated service. Deleting a certificate issued by a private certificate authority (CA) has no effect on the CA. You will continue to be charged for the CA until it is deleted. For more information, see Deleting Your Private CA in the Private Certificate Authority User Guide. Deleting a certificate issued by a private certificate authority (CA) has no effect on the CA. You will continue to be charged for the CA until it is deleted. For more information, see Deleting your private CA in the Amazon Web Services Private Certificate Authority User Guide.

```sql
DELETE FROM aws.acm.certificates
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="get_certificate"
    values={[
        { label: 'get_certificate', value: 'get_certificate' },
        { label: 'resend_validation_email', value: 'resend_validation_email' },
        { label: 'search_certificates', value: 'search_certificates' }
    ]}
>
<TabItem value="get_certificate">

Retrieves a certificate and its certificate chain. The certificate may be either a public or private certificate issued using the ACM RequestCertificate action, or a certificate imported into ACM using the ImportCertificate action. The chain consists of the certificate of the issuing CA and the intermediate certificates of any other subordinate CAs. All of the certificates are base64 encoded. You can use OpenSSL to decode the certificates and inspect individual fields.

```sql
EXEC aws.acm.certificates.get_certificate 
@region='{{ region }}' --required 
@@json=
'{
"CertificateArn": "{{ CertificateArn }}"
}'
;
```
</TabItem>
<TabItem value="resend_validation_email">

Resends the email that requests domain ownership validation. The domain owner or an authorized representative must approve the ACM certificate before it can be issued. The certificate can be approved by clicking a link in the mail to navigate to the Amazon certificate approval website and then clicking I Approve. However, the validation email can be blocked by spam filters. Therefore, if you do not receive the original mail, you can request that the mail be resent within 72 hours of requesting the ACM certificate. If more than 72 hours have elapsed since your original request or since your last attempt to resend validation mail, you must request a new certificate. For more information about setting up your contact email addresses, see Configure Email for your Domain.

```sql
EXEC aws.acm.certificates.resend_validation_email 
@region='{{ region }}' --required 
@@json=
'{
"CertificateArn": "{{ CertificateArn }}", 
"Domain": "{{ Domain }}", 
"ValidationDomain": "{{ ValidationDomain }}"
}'
;
```
</TabItem>
<TabItem value="search_certificates">

Retrieves a list of certificates matching search criteria. You can filter certificates by X.509 attributes and ACM specific properties like certificate status, type and renewal eligibility. This operation provides more flexible filtering than ListCertificates by supporting complex filter statements.

```sql
EXEC aws.acm.certificates.search_certificates 
@region='{{ region }}' --required 
@@json=
'{
"FilterStatement": "{{ FilterStatement }}", 
"MaxResults": {{ MaxResults }}, 
"NextToken": "{{ NextToken }}", 
"SortBy": "{{ SortBy }}", 
"SortOrder": "{{ SortOrder }}"
}'
;
```
</TabItem>
</Tabs>
