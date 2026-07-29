--- 
title: certificate_authorities
hide_title: false
hide_table_of_contents: false
keywords:
  - certificate_authorities
  - acm_pca
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

Creates, updates, deletes, gets or lists a <code>certificate_authorities</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="certificate_authorities" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.acm_pca.certificate_authorities" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_certificate_authority"
    values={[
        { label: 'describe_certificate_authority', value: 'describe_certificate_authority' },
        { label: 'list_certificate_authorities', value: 'list_certificate_authorities' }
    ]}
>
<TabItem value="describe_certificate_authority">

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
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>Amazon Resource Name (ARN) for your private certificate authority (CA). The format is 12345678-1234-1234-1234-123456789012 . (pattern: &lt;code&gt;arn:&#91;\w+=/,.@-&#93;+:acm-pca:&#91;\w+=/,.@-&#93;*:&#91;0-9&#93;*:&#91;\w+=,.@-&#93;+(/&#91;\w+=,.@-&#93;+)*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="certificate_authority_configuration" /></td>
    <td><code>object</code></td>
    <td>Your private CA configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Date and time at which your private CA was created.</td>
</tr>
<tr>
    <td><CopyableCode code="failure_reason" /></td>
    <td><code>string</code></td>
    <td>Reason the request to create your private CA failed. (REQUEST_TIMED_OUT, UNSUPPORTED_ALGORITHM, OTHER)</td>
</tr>
<tr>
    <td><CopyableCode code="key_storage_security_standard" /></td>
    <td><code>string</code></td>
    <td>Defines a cryptographic key management compliance standard for handling and protecting CA keys. Default: FIPS_140_2_LEVEL_3_OR_HIGHER Starting January 26, 2023, Amazon Web Services Private CA protects all CA private keys in non-China regions using hardware security modules (HSMs) that comply with FIPS PUB 140-2 Level 3. For information about security standard support in different Amazon Web Services Regions, see Storage and security compliance of Amazon Web Services Private CA private keys. (FIPS_140_2_LEVEL_2_OR_HIGHER, FIPS_140_2_LEVEL_3_OR_HIGHER, CCPC_LEVEL_1_OR_HIGHER)</td>
</tr>
<tr>
    <td><CopyableCode code="last_state_change_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Date and time at which your private CA was last updated.</td>
</tr>
<tr>
    <td><CopyableCode code="not_after" /></td>
    <td><code>string (date-time)</code></td>
    <td>Date and time after which your private CA certificate is not valid.</td>
</tr>
<tr>
    <td><CopyableCode code="not_before" /></td>
    <td><code>string (date-time)</code></td>
    <td>Date and time before which your private CA certificate is not valid.</td>
</tr>
<tr>
    <td><CopyableCode code="owner_account" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services account ID that owns the certificate authority. (pattern: &lt;code&gt;&#91;0-9&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="restorable_until" /></td>
    <td><code>string (date-time)</code></td>
    <td>The period during which a deleted CA can be restored. For more information, see the PermanentDeletionTimeInDays parameter of the DeleteCertificateAuthorityRequest action.</td>
</tr>
<tr>
    <td><CopyableCode code="revocation_configuration" /></td>
    <td><code>object</code></td>
    <td>Information about the Online Certificate Status Protocol (OCSP) configuration or certificate revocation list (CRL) created and maintained by your private CA.</td>
</tr>
<tr>
    <td><CopyableCode code="serial" /></td>
    <td><code>string</code></td>
    <td>Serial number of your private CA.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Status of your private CA. (CREATING, PENDING_CERTIFICATE, ACTIVE, DELETED, DISABLED, EXPIRED, FAILED)</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Type of your private CA. (ROOT, SUBORDINATE)</td>
</tr>
<tr>
    <td><CopyableCode code="usage_mode" /></td>
    <td><code>string</code></td>
    <td>Specifies whether the CA issues general-purpose certificates that typically require a revocation mechanism, or short-lived certificates that may optionally omit revocation because they expire quickly. Short-lived certificate validity is limited to seven days. The default value is GENERAL_PURPOSE. (GENERAL_PURPOSE, SHORT_LIVED_CERTIFICATE)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_certificate_authorities">

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
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>Amazon Resource Name (ARN) for your private certificate authority (CA). The format is 12345678-1234-1234-1234-123456789012 . (pattern: &lt;code&gt;arn:&#91;\w+=/,.@-&#93;+:acm-pca:&#91;\w+=/,.@-&#93;*:&#91;0-9&#93;*:&#91;\w+=,.@-&#93;+(/&#91;\w+=,.@-&#93;+)*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="certificate_authority_configuration" /></td>
    <td><code>object</code></td>
    <td>Your private CA configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Date and time at which your private CA was created.</td>
</tr>
<tr>
    <td><CopyableCode code="failure_reason" /></td>
    <td><code>string</code></td>
    <td>Reason the request to create your private CA failed. (REQUEST_TIMED_OUT, UNSUPPORTED_ALGORITHM, OTHER)</td>
</tr>
<tr>
    <td><CopyableCode code="key_storage_security_standard" /></td>
    <td><code>string</code></td>
    <td>Defines a cryptographic key management compliance standard for handling and protecting CA keys. Default: FIPS_140_2_LEVEL_3_OR_HIGHER Starting January 26, 2023, Amazon Web Services Private CA protects all CA private keys in non-China regions using hardware security modules (HSMs) that comply with FIPS PUB 140-2 Level 3. For information about security standard support in different Amazon Web Services Regions, see Storage and security compliance of Amazon Web Services Private CA private keys. (FIPS_140_2_LEVEL_2_OR_HIGHER, FIPS_140_2_LEVEL_3_OR_HIGHER, CCPC_LEVEL_1_OR_HIGHER)</td>
</tr>
<tr>
    <td><CopyableCode code="last_state_change_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Date and time at which your private CA was last updated.</td>
</tr>
<tr>
    <td><CopyableCode code="not_after" /></td>
    <td><code>string (date-time)</code></td>
    <td>Date and time after which your private CA certificate is not valid.</td>
</tr>
<tr>
    <td><CopyableCode code="not_before" /></td>
    <td><code>string (date-time)</code></td>
    <td>Date and time before which your private CA certificate is not valid.</td>
</tr>
<tr>
    <td><CopyableCode code="owner_account" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services account ID that owns the certificate authority. (pattern: &lt;code&gt;&#91;0-9&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="restorable_until" /></td>
    <td><code>string (date-time)</code></td>
    <td>The period during which a deleted CA can be restored. For more information, see the PermanentDeletionTimeInDays parameter of the DeleteCertificateAuthorityRequest action.</td>
</tr>
<tr>
    <td><CopyableCode code="revocation_configuration" /></td>
    <td><code>object</code></td>
    <td>Information about the Online Certificate Status Protocol (OCSP) configuration or certificate revocation list (CRL) created and maintained by your private CA.</td>
</tr>
<tr>
    <td><CopyableCode code="serial" /></td>
    <td><code>string</code></td>
    <td>Serial number of your private CA.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Status of your private CA. (CREATING, PENDING_CERTIFICATE, ACTIVE, DELETED, DISABLED, EXPIRED, FAILED)</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Type of your private CA. (ROOT, SUBORDINATE)</td>
</tr>
<tr>
    <td><CopyableCode code="usage_mode" /></td>
    <td><code>string</code></td>
    <td>Specifies whether the CA issues general-purpose certificates that typically require a revocation mechanism, or short-lived certificates that may optionally omit revocation because they expire quickly. Short-lived certificate validity is limited to seven days. The default value is GENERAL_PURPOSE. (GENERAL_PURPOSE, SHORT_LIVED_CERTIFICATE)</td>
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
    <td><a href="#describe_certificate_authority"><CopyableCode code="describe_certificate_authority" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists information about your private certificate authority (CA) or one that has been shared with you. You specify the private CA on input by its ARN (Amazon Resource Name). The output contains the status of your CA. This can be any of the following: CREATING - Amazon Web Services Private CA is creating your private certificate authority. PENDING_CERTIFICATE - The certificate is pending. You must use your Amazon Web Services Private CA-hosted or on-premises root or subordinate CA to sign your private CA CSR and then import it into Amazon Web Services Private CA. ACTIVE - Your private CA is active. DISABLED - Your private CA has been disabled. EXPIRED - Your private CA certificate has expired. FAILED - Your private CA has failed. Your CA can fail because of problems such a network outage or back-end Amazon Web Services failure or other errors. A failed CA can never return to the pending state. You must create a new CA. DELETED - Your private CA is within the restoration period, after which it is permanently deleted. The length of time remaining in the CA's restoration period is also included in this action's output.</td>
</tr>
<tr>
    <td><a href="#list_certificate_authorities"><CopyableCode code="list_certificate_authorities" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists the private certificate authorities that you created by using the CreateCertificateAuthority action.</td>
</tr>
<tr>
    <td><a href="#create_certificate_authority"><CopyableCode code="create_certificate_authority" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-CertificateAuthorityConfiguration"><code>CertificateAuthorityConfiguration</code></a>, <a href="#parameter-CertificateAuthorityType"><code>CertificateAuthorityType</code></a></td>
    <td></td>
    <td>Creates a root or subordinate private certificate authority (CA). You must specify the CA configuration, an optional configuration for Online Certificate Status Protocol (OCSP) and/or a certificate revocation list (CRL), the CA type, and an optional idempotency token to avoid accidental creation of multiple CAs. The CA configuration specifies the name of the algorithm and key size to be used to create the CA private key, the type of signing algorithm that the CA uses, and X.500 subject information. The OCSP configuration can optionally specify a custom URL for the OCSP responder. The CRL configuration specifies the CRL expiration period in days (the validity period of the CRL), the Amazon S3 bucket that will contain the CRL, and a CNAME alias for the S3 bucket that is included in certificates issued by the CA. If successful, this action returns the Amazon Resource Name (ARN) of the CA. Both Amazon Web Services Private CA and the IAM principal must have permission to write to the S3 bucket that you specify. If the IAM principal making the call does not have permission to write to the bucket, then an exception is thrown. For more information, see Access policies for CRLs in Amazon S3. Amazon Web Services Private CA assets that are stored in Amazon S3 can be protected with encryption. For more information, see Encrypting Your CRLs.</td>
</tr>
<tr>
    <td><a href="#update_certificate_authority"><CopyableCode code="update_certificate_authority" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-CertificateAuthorityArn"><code>CertificateAuthorityArn</code></a></td>
    <td></td>
    <td>Updates the status or configuration of a private certificate authority (CA). Your private CA must be in the ACTIVE or DISABLED state before you can update it. You can disable a private CA that is in the ACTIVE state or make a CA that is in the DISABLED state active again. Both Amazon Web Services Private CA and the IAM principal must have permission to write to the S3 bucket that you specify. If the IAM principal making the call does not have permission to write to the bucket, then an exception is thrown. For more information, see Access policies for CRLs in Amazon S3.</td>
</tr>
<tr>
    <td><a href="#delete_certificate_authority"><CopyableCode code="delete_certificate_authority" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a private certificate authority (CA). You must provide the Amazon Resource Name (ARN) of the private CA that you want to delete. You can find the ARN by calling the ListCertificateAuthorities action. Deleting a CA will invalidate other CAs and certificates below it in your CA hierarchy. Before you can delete a CA that you have created and activated, you must disable it. To do this, call the UpdateCertificateAuthority action and set the CertificateAuthorityStatus parameter to DISABLED. Additionally, you can delete a CA if you are waiting for it to be created (that is, the status of the CA is CREATING). You can also delete it if the CA has been created but you haven't yet imported the signed certificate into Amazon Web Services Private CA (that is, the status of the CA is PENDING_CERTIFICATE). When you successfully call DeleteCertificateAuthority, the CA's status changes to DELETED. However, the CA won't be permanently deleted until the restoration period has passed. By default, if you do not set the PermanentDeletionTimeInDays parameter, the CA remains restorable for 30 days. You can set the parameter from 7 to 30 days. The DescribeCertificateAuthority action returns the time remaining in the restoration window of a private CA in the DELETED state. To restore an eligible CA, call the RestoreCertificateAuthority action. A private CA can be deleted if it is in the PENDING_CERTIFICATE, CREATING, EXPIRED, DISABLED, or FAILED state. To delete a CA in the ACTIVE state, you must first disable it, or else the delete request results in an exception. If you are deleting a private CA in the PENDING_CERTIFICATE or DISABLED state, you can set the length of its restoration period to 7-30 days. The default is 30. During this time, the status is set to DELETED and the CA can be restored. A private CA deleted in the CREATING or FAILED state has no assigned restoration period and cannot be restored.</td>
</tr>
<tr>
    <td><a href="#import_certificate_authority_certificate"><CopyableCode code="import_certificate_authority_certificate" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-CertificateAuthorityArn"><code>CertificateAuthorityArn</code></a>, <a href="#parameter-Certificate"><code>Certificate</code></a></td>
    <td></td>
    <td>Imports a signed private CA certificate into Amazon Web Services Private CA. This action is used when you are using a chain of trust whose root is located outside Amazon Web Services Private CA. Before you can call this action, the following preparations must in place: In Amazon Web Services Private CA, call the CreateCertificateAuthority action to create the private CA that you plan to back with the imported certificate. Call the GetCertificateAuthorityCsr action to generate a certificate signing request (CSR). Sign the CSR using a root or intermediate CA hosted by either an on-premises PKI hierarchy or by a commercial CA. Create a certificate chain and copy the signed certificate and the certificate chain to your working directory. Amazon Web Services Private CA supports three scenarios for installing a CA certificate: Installing a certificate for a root CA hosted by Amazon Web Services Private CA. Installing a subordinate CA certificate whose parent authority is hosted by Amazon Web Services Private CA. Installing a subordinate CA certificate whose parent authority is externally hosted. The following additional requirements apply when you import a CA certificate. Only a self-signed certificate can be imported as a root CA. A self-signed certificate cannot be imported as a subordinate CA. Your certificate chain must not include the private CA certificate that you are importing. Your root CA must be the last certificate in your chain. The subordinate certificate, if any, that your root CA signed must be next to last. The subordinate certificate signed by the preceding subordinate CA must come next, and so on until your chain is built. The chain must be PEM-encoded. The maximum allowed size of a certificate is 32 KB. The maximum allowed size of a certificate chain is 2 MB. Enforcement of Critical Constraints Amazon Web Services Private CA allows the following extensions to be marked critical in the imported CA certificate or chain. Authority key identifier Basic constraints (must be marked critical) Certificate policies Extended key usage Inhibit anyPolicy Issuer alternative name Key usage Name constraints Policy mappings Subject alternative name Subject directory attributes Subject key identifier Subject information access Amazon Web Services Private CA rejects the following extensions when they are marked critical in an imported CA certificate or chain. Authority information access CRL distribution points Freshest CRL Policy constraints Amazon Web Services Private Certificate Authority will also reject any other extension marked as critical not contained on the preceding list of allowed extensions.</td>
</tr>
<tr>
    <td><a href="#issue_certificate"><CopyableCode code="issue_certificate" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-CertificateAuthorityArn"><code>CertificateAuthorityArn</code></a>, <a href="#parameter-Csr"><code>Csr</code></a>, <a href="#parameter-SigningAlgorithm"><code>SigningAlgorithm</code></a>, <a href="#parameter-Validity"><code>Validity</code></a></td>
    <td></td>
    <td>Uses your private certificate authority (CA), or one that has been shared with you, to issue a client certificate. This action returns the Amazon Resource Name (ARN) of the certificate. You can retrieve the certificate by calling the GetCertificate action and specifying the ARN. You cannot use the ACM ListCertificateAuthorities action to retrieve the ARNs of the certificates that you issue by using Amazon Web Services Private CA.</td>
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
    defaultValue="describe_certificate_authority"
    values={[
        { label: 'describe_certificate_authority', value: 'describe_certificate_authority' },
        { label: 'list_certificate_authorities', value: 'list_certificate_authorities' }
    ]}
>
<TabItem value="describe_certificate_authority">

Lists information about your private certificate authority (CA) or one that has been shared with you. You specify the private CA on input by its ARN (Amazon Resource Name). The output contains the status of your CA. This can be any of the following: CREATING - Amazon Web Services Private CA is creating your private certificate authority. PENDING_CERTIFICATE - The certificate is pending. You must use your Amazon Web Services Private CA-hosted or on-premises root or subordinate CA to sign your private CA CSR and then import it into Amazon Web Services Private CA. ACTIVE - Your private CA is active. DISABLED - Your private CA has been disabled. EXPIRED - Your private CA certificate has expired. FAILED - Your private CA has failed. Your CA can fail because of problems such a network outage or back-end Amazon Web Services failure or other errors. A failed CA can never return to the pending state. You must create a new CA. DELETED - Your private CA is within the restoration period, after which it is permanently deleted. The length of time remaining in the CA's restoration period is also included in this action's output.

```sql
SELECT
arn,
certificate_authority_configuration,
created_at,
failure_reason,
key_storage_security_standard,
last_state_change_at,
not_after,
not_before,
owner_account,
restorable_until,
revocation_configuration,
serial,
status,
type,
usage_mode
FROM aws.acm_pca.certificate_authorities
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_certificate_authorities">

Lists the private certificate authorities that you created by using the CreateCertificateAuthority action.

```sql
SELECT
arn,
certificate_authority_configuration,
created_at,
failure_reason,
key_storage_security_standard,
last_state_change_at,
not_after,
not_before,
owner_account,
restorable_until,
revocation_configuration,
serial,
status,
type,
usage_mode
FROM aws.acm_pca.certificate_authorities
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_certificate_authority"
    values={[
        { label: 'create_certificate_authority', value: 'create_certificate_authority' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_certificate_authority">

Creates a root or subordinate private certificate authority (CA). You must specify the CA configuration, an optional configuration for Online Certificate Status Protocol (OCSP) and/or a certificate revocation list (CRL), the CA type, and an optional idempotency token to avoid accidental creation of multiple CAs. The CA configuration specifies the name of the algorithm and key size to be used to create the CA private key, the type of signing algorithm that the CA uses, and X.500 subject information. The OCSP configuration can optionally specify a custom URL for the OCSP responder. The CRL configuration specifies the CRL expiration period in days (the validity period of the CRL), the Amazon S3 bucket that will contain the CRL, and a CNAME alias for the S3 bucket that is included in certificates issued by the CA. If successful, this action returns the Amazon Resource Name (ARN) of the CA. Both Amazon Web Services Private CA and the IAM principal must have permission to write to the S3 bucket that you specify. If the IAM principal making the call does not have permission to write to the bucket, then an exception is thrown. For more information, see Access policies for CRLs in Amazon S3. Amazon Web Services Private CA assets that are stored in Amazon S3 can be protected with encryption. For more information, see Encrypting Your CRLs.

```sql
INSERT INTO aws.acm_pca.certificate_authorities (
CertificateAuthorityConfiguration,
RevocationConfiguration,
CertificateAuthorityType,
IdempotencyToken,
KeyStorageSecurityStandard,
Tags,
UsageMode,
region
)
SELECT 
'{{ CertificateAuthorityConfiguration }}' /* required */,
'{{ RevocationConfiguration }}',
'{{ CertificateAuthorityType }}' /* required */,
'{{ IdempotencyToken }}',
'{{ KeyStorageSecurityStandard }}',
'{{ Tags }}',
'{{ UsageMode }}',
'{{ region }}'
RETURNING
certificate_authority_arn
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: certificate_authorities
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the certificate_authorities resource.
    - name: CertificateAuthorityConfiguration
      description: |
        Name and bit size of the private key algorithm, the name of the signing algorithm, and X.500 certificate subject information.
      value:
        KeyAlgorithm: "{{ KeyAlgorithm }}"
        SigningAlgorithm: "{{ SigningAlgorithm }}"
        Subject:
          Country: "{{ Country }}"
          Organization: "{{ Organization }}"
          OrganizationalUnit: "{{ OrganizationalUnit }}"
          DistinguishedNameQualifier: "{{ DistinguishedNameQualifier }}"
          State: "{{ State }}"
          CommonName: "{{ CommonName }}"
          SerialNumber: "{{ SerialNumber }}"
          Locality: "{{ Locality }}"
          Title: "{{ Title }}"
          Surname: "{{ Surname }}"
          GivenName: "{{ GivenName }}"
          Initials: "{{ Initials }}"
          Pseudonym: "{{ Pseudonym }}"
          GenerationQualifier: "{{ GenerationQualifier }}"
          CustomAttributes:
            - ObjectIdentifier: "{{ ObjectIdentifier }}"
              Value: "{{ Value }}"
        CsrExtensions:
          KeyUsage:
            DigitalSignature: {{ DigitalSignature }}
            NonRepudiation: {{ NonRepudiation }}
            KeyEncipherment: {{ KeyEncipherment }}
            DataEncipherment: {{ DataEncipherment }}
            KeyAgreement: {{ KeyAgreement }}
            KeyCertSign: {{ KeyCertSign }}
            CRLSign: {{ CRLSign }}
            EncipherOnly: {{ EncipherOnly }}
            DecipherOnly: {{ DecipherOnly }}
          SubjectInformationAccess:
            - AccessMethod:
                CustomObjectIdentifier: "{{ CustomObjectIdentifier }}"
                AccessMethodType: "{{ AccessMethodType }}"
              AccessLocation:
                OtherName:
                  TypeId: "{{ TypeId }}"
                  Value: "{{ Value }}"
                Rfc822Name: "{{ Rfc822Name }}"
                DnsName: "{{ DnsName }}"
                DirectoryName:
                  Country: "{{ Country }}"
                  Organization: "{{ Organization }}"
                  OrganizationalUnit: "{{ OrganizationalUnit }}"
                  DistinguishedNameQualifier: "{{ DistinguishedNameQualifier }}"
                  State: "{{ State }}"
                  CommonName: "{{ CommonName }}"
                  SerialNumber: "{{ SerialNumber }}"
                  Locality: "{{ Locality }}"
                  Title: "{{ Title }}"
                  Surname: "{{ Surname }}"
                  GivenName: "{{ GivenName }}"
                  Initials: "{{ Initials }}"
                  Pseudonym: "{{ Pseudonym }}"
                  GenerationQualifier: "{{ GenerationQualifier }}"
                  CustomAttributes: "{{ CustomAttributes }}"
                EdiPartyName:
                  PartyName: "{{ PartyName }}"
                  NameAssigner: "{{ NameAssigner }}"
                UniformResourceIdentifier: "{{ UniformResourceIdentifier }}"
                IpAddress: "{{ IpAddress }}"
                RegisteredId: "{{ RegisteredId }}"
    - name: RevocationConfiguration
      description: |
        Contains information to enable support for Online Certificate Status Protocol (OCSP), certificate revocation list (CRL), both protocols, or neither. By default, both certificate validation mechanisms are disabled. The following requirements apply to revocation configurations. A configuration disabling CRLs or OCSP must contain only the Enabled=False parameter, and will fail if other parameters such as CustomCname or ExpirationInDays are included. In a CRL configuration, the S3BucketName parameter must conform to Amazon S3 bucket naming rules. A configuration containing a custom Canonical Name (CNAME) parameter for CRLs or OCSP must conform to RFC2396 restrictions on the use of special characters in a CNAME. In a CRL or OCSP configuration, the value of a CNAME parameter must not include a protocol prefix such as "http://" or "https://". For more information, see the OcspConfiguration and CrlConfiguration types.
      value:
        CrlConfiguration:
          Enabled: {{ Enabled }}
          ExpirationInDays: {{ ExpirationInDays }}
          CustomCname: "{{ CustomCname }}"
          S3BucketName: "{{ S3BucketName }}"
          S3ObjectAcl: "{{ S3ObjectAcl }}"
          CrlDistributionPointExtensionConfiguration:
            OmitExtension: {{ OmitExtension }}
          CrlType: "{{ CrlType }}"
          CustomPath: "{{ CustomPath }}"
        OcspConfiguration:
          Enabled: {{ Enabled }}
          OcspCustomCname: "{{ OcspCustomCname }}"
    - name: CertificateAuthorityType
      value: "{{ CertificateAuthorityType }}"
      description: |
        The type of the certificate authority.
      valid_values: ['ROOT', 'SUBORDINATE']
    - name: IdempotencyToken
      value: "{{ IdempotencyToken }}"
      description: |
        Custom string that can be used to distinguish between calls to the CreateCertificateAuthority action. Idempotency tokens for CreateCertificateAuthority time out after five minutes. Therefore, if you call CreateCertificateAuthority multiple times with the same idempotency token within five minutes, Amazon Web Services Private CA recognizes that you are requesting only certificate authority and will issue only one. If you change the idempotency token for each call, Amazon Web Services Private CA recognizes that you are requesting multiple certificate authorities.
    - name: KeyStorageSecurityStandard
      value: "{{ KeyStorageSecurityStandard }}"
      description: |
        Specifies a cryptographic key management compliance standard for handling and protecting CA keys. Default: FIPS_140_2_LEVEL_3_OR_HIGHER Some Amazon Web Services Regions don't support the default value. When you create a CA in these Regions, you must use CCPC_LEVEL_1_OR_HIGHER for the KeyStorageSecurityStandard parameter. If you don't, the operation returns an InvalidArgsException with this message: "A certificate authority cannot be created in this region with the specified security standard." For information about security standard support in different Amazon Web Services Regions, see Storage and security compliance of Amazon Web Services Private CA private keys.
      valid_values: ['FIPS_140_2_LEVEL_2_OR_HIGHER', 'FIPS_140_2_LEVEL_3_OR_HIGHER', 'CCPC_LEVEL_1_OR_HIGHER']
    - name: Tags
      description: |
        Key-value pairs that will be attached to the new private CA. You can associate up to 50 tags with a private CA. For information using tags with IAM to manage permissions, see Controlling Access Using IAM Tags.
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
    - name: UsageMode
      value: "{{ UsageMode }}"
      description: |
        Specifies whether the CA issues general-purpose certificates that typically require a revocation mechanism, or short-lived certificates that may optionally omit revocation because they expire quickly. Short-lived certificate validity is limited to seven days. The default value is GENERAL_PURPOSE.
      valid_values: ['GENERAL_PURPOSE', 'SHORT_LIVED_CERTIFICATE']
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_certificate_authority"
    values={[
        { label: 'update_certificate_authority', value: 'update_certificate_authority' }
    ]}
>
<TabItem value="update_certificate_authority">

Updates the status or configuration of a private certificate authority (CA). Your private CA must be in the ACTIVE or DISABLED state before you can update it. You can disable a private CA that is in the ACTIVE state or make a CA that is in the DISABLED state active again. Both Amazon Web Services Private CA and the IAM principal must have permission to write to the S3 bucket that you specify. If the IAM principal making the call does not have permission to write to the bucket, then an exception is thrown. For more information, see Access policies for CRLs in Amazon S3.

```sql
UPDATE aws.acm_pca.certificate_authorities
SET 
CertificateAuthorityArn = '{{ CertificateAuthorityArn }}',
RevocationConfiguration = '{{ RevocationConfiguration }}',
Status = '{{ Status }}'
WHERE 
region = '{{ region }}' --required
AND CertificateAuthorityArn = '{{ CertificateAuthorityArn }}' --required;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_certificate_authority"
    values={[
        { label: 'delete_certificate_authority', value: 'delete_certificate_authority' }
    ]}
>
<TabItem value="delete_certificate_authority">

Deletes a private certificate authority (CA). You must provide the Amazon Resource Name (ARN) of the private CA that you want to delete. You can find the ARN by calling the ListCertificateAuthorities action. Deleting a CA will invalidate other CAs and certificates below it in your CA hierarchy. Before you can delete a CA that you have created and activated, you must disable it. To do this, call the UpdateCertificateAuthority action and set the CertificateAuthorityStatus parameter to DISABLED. Additionally, you can delete a CA if you are waiting for it to be created (that is, the status of the CA is CREATING). You can also delete it if the CA has been created but you haven't yet imported the signed certificate into Amazon Web Services Private CA (that is, the status of the CA is PENDING_CERTIFICATE). When you successfully call DeleteCertificateAuthority, the CA's status changes to DELETED. However, the CA won't be permanently deleted until the restoration period has passed. By default, if you do not set the PermanentDeletionTimeInDays parameter, the CA remains restorable for 30 days. You can set the parameter from 7 to 30 days. The DescribeCertificateAuthority action returns the time remaining in the restoration window of a private CA in the DELETED state. To restore an eligible CA, call the RestoreCertificateAuthority action. A private CA can be deleted if it is in the PENDING_CERTIFICATE, CREATING, EXPIRED, DISABLED, or FAILED state. To delete a CA in the ACTIVE state, you must first disable it, or else the delete request results in an exception. If you are deleting a private CA in the PENDING_CERTIFICATE or DISABLED state, you can set the length of its restoration period to 7-30 days. The default is 30. During this time, the status is set to DELETED and the CA can be restored. A private CA deleted in the CREATING or FAILED state has no assigned restoration period and cannot be restored.

```sql
DELETE FROM aws.acm_pca.certificate_authorities
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="import_certificate_authority_certificate"
    values={[
        { label: 'import_certificate_authority_certificate', value: 'import_certificate_authority_certificate' },
        { label: 'issue_certificate', value: 'issue_certificate' }
    ]}
>
<TabItem value="import_certificate_authority_certificate">

Imports a signed private CA certificate into Amazon Web Services Private CA. This action is used when you are using a chain of trust whose root is located outside Amazon Web Services Private CA. Before you can call this action, the following preparations must in place: In Amazon Web Services Private CA, call the CreateCertificateAuthority action to create the private CA that you plan to back with the imported certificate. Call the GetCertificateAuthorityCsr action to generate a certificate signing request (CSR). Sign the CSR using a root or intermediate CA hosted by either an on-premises PKI hierarchy or by a commercial CA. Create a certificate chain and copy the signed certificate and the certificate chain to your working directory. Amazon Web Services Private CA supports three scenarios for installing a CA certificate: Installing a certificate for a root CA hosted by Amazon Web Services Private CA. Installing a subordinate CA certificate whose parent authority is hosted by Amazon Web Services Private CA. Installing a subordinate CA certificate whose parent authority is externally hosted. The following additional requirements apply when you import a CA certificate. Only a self-signed certificate can be imported as a root CA. A self-signed certificate cannot be imported as a subordinate CA. Your certificate chain must not include the private CA certificate that you are importing. Your root CA must be the last certificate in your chain. The subordinate certificate, if any, that your root CA signed must be next to last. The subordinate certificate signed by the preceding subordinate CA must come next, and so on until your chain is built. The chain must be PEM-encoded. The maximum allowed size of a certificate is 32 KB. The maximum allowed size of a certificate chain is 2 MB. Enforcement of Critical Constraints Amazon Web Services Private CA allows the following extensions to be marked critical in the imported CA certificate or chain. Authority key identifier Basic constraints (must be marked critical) Certificate policies Extended key usage Inhibit anyPolicy Issuer alternative name Key usage Name constraints Policy mappings Subject alternative name Subject directory attributes Subject key identifier Subject information access Amazon Web Services Private CA rejects the following extensions when they are marked critical in an imported CA certificate or chain. Authority information access CRL distribution points Freshest CRL Policy constraints Amazon Web Services Private Certificate Authority will also reject any other extension marked as critical not contained on the preceding list of allowed extensions.

```sql
EXEC aws.acm_pca.certificate_authorities.import_certificate_authority_certificate 
@region='{{ region }}' --required 
@@json=
'{
"CertificateAuthorityArn": "{{ CertificateAuthorityArn }}", 
"Certificate": "{{ Certificate }}", 
"CertificateChain": "{{ CertificateChain }}"
}'
;
```
</TabItem>
<TabItem value="issue_certificate">

Uses your private certificate authority (CA), or one that has been shared with you, to issue a client certificate. This action returns the Amazon Resource Name (ARN) of the certificate. You can retrieve the certificate by calling the GetCertificate action and specifying the ARN. You cannot use the ACM ListCertificateAuthorities action to retrieve the ARNs of the certificates that you issue by using Amazon Web Services Private CA.

```sql
EXEC aws.acm_pca.certificate_authorities.issue_certificate 
@region='{{ region }}' --required 
@@json=
'{
"ApiPassthrough": "{{ ApiPassthrough }}", 
"CertificateAuthorityArn": "{{ CertificateAuthorityArn }}", 
"Csr": "{{ Csr }}", 
"SigningAlgorithm": "{{ SigningAlgorithm }}", 
"TemplateArn": "{{ TemplateArn }}", 
"Validity": "{{ Validity }}", 
"ValidityNotBefore": "{{ ValidityNotBefore }}", 
"IdempotencyToken": "{{ IdempotencyToken }}"
}'
;
```
</TabItem>
</Tabs>
