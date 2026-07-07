--- 
title: certificates
hide_title: false
hide_table_of_contents: false
keywords:
  - certificates
  - transfer
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
<tr><td><b>Id</b></td><td><CopyableCode code="aws.transfer.certificates" /></td></tr>
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
    <td><CopyableCode code="ActiveDate" /></td>
    <td><code>string (date-time)</code></td>
    <td>An optional date that specifies when the certificate becomes active. If you do not specify a value, ActiveDate takes the same value as NotBeforeDate, which is specified by the CA.</td>
</tr>
<tr>
    <td><CopyableCode code="Arn" /></td>
    <td><code>string</code></td>
    <td>The unique Amazon Resource Name (ARN) for the certificate. (pattern: &lt;code&gt;arn:\S+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="Certificate" /></td>
    <td><code>string</code></td>
    <td>The file name for the certificate. (pattern: &lt;code&gt;&#91;\t\n\r\u0020-\u00FF&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="CertificateChain" /></td>
    <td><code>string</code></td>
    <td>The list of certificates that make up the chain for the certificate. (pattern: &lt;code&gt;&#91;\t\n\r\u0020-\u00FF&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="CertificateId" /></td>
    <td><code>string</code></td>
    <td>An array of identifiers for the imported certificates. You use this identifier for working with profiles and partner profiles. (pattern: &lt;code&gt;cert-(&#91;0-9a-f&#93;&#123;17&#125;)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="Description" /></td>
    <td><code>string</code></td>
    <td>The name or description that's used to identity the certificate. (pattern: &lt;code&gt;&#91;\u0021-\u007E&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="InactiveDate" /></td>
    <td><code>string (date-time)</code></td>
    <td>An optional date that specifies when the certificate becomes inactive. If you do not specify a value, InactiveDate takes the same value as NotAfterDate, which is specified by the CA.</td>
</tr>
<tr>
    <td><CopyableCode code="NotAfterDate" /></td>
    <td><code>string (date-time)</code></td>
    <td>The final date that the certificate is valid.</td>
</tr>
<tr>
    <td><CopyableCode code="NotBeforeDate" /></td>
    <td><code>string (date-time)</code></td>
    <td>The earliest date that the certificate is valid.</td>
</tr>
<tr>
    <td><CopyableCode code="Serial" /></td>
    <td><code>string</code></td>
    <td>The serial number for the certificate. (pattern: &lt;code&gt;&#91;0-9a-fA-F&#123;&#125;:?&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="Status" /></td>
    <td><code>string</code></td>
    <td>A certificate's status can be either ACTIVE or INACTIVE. You can set ActiveDate and InactiveDate in the UpdateCertificate call. If you set values for these parameters, those values are used to determine whether the certificate has a status of ACTIVE or INACTIVE. If you don't set values for ActiveDate and InactiveDate, we use the NotBefore and NotAfter date as specified on the X509 certificate to determine when a certificate is active and when it is inactive. (ACTIVE, PENDING_ROTATION, INACTIVE)</td>
</tr>
<tr>
    <td><CopyableCode code="Tags" /></td>
    <td><code>array</code></td>
    <td>Key-value pairs that can be used to group and search for certificates.</td>
</tr>
<tr>
    <td><CopyableCode code="Type" /></td>
    <td><code>string</code></td>
    <td>If a private key has been specified for the certificate, its type is CERTIFICATE_WITH_PRIVATE_KEY. If there is no private key, the type is CERTIFICATE. (CERTIFICATE, CERTIFICATE_WITH_PRIVATE_KEY)</td>
</tr>
<tr>
    <td><CopyableCode code="Usage" /></td>
    <td><code>string</code></td>
    <td>Specifies how this certificate is used. It can be used in the following ways: SIGNING: For signing AS2 messages ENCRYPTION: For encrypting AS2 messages TLS: For securing AS2 communications sent over HTTPS (SIGNING, ENCRYPTION, TLS)</td>
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
    <td><CopyableCode code="ActiveDate" /></td>
    <td><code>string (date-time)</code></td>
    <td>An optional date that specifies when the certificate becomes active. If you do not specify a value, ActiveDate takes the same value as NotBeforeDate, which is specified by the CA.</td>
</tr>
<tr>
    <td><CopyableCode code="Arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the specified certificate. (pattern: &lt;code&gt;arn:\S+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="CertificateId" /></td>
    <td><code>string</code></td>
    <td>An array of identifiers for the imported certificates. You use this identifier for working with profiles and partner profiles. (pattern: &lt;code&gt;cert-(&#91;0-9a-f&#93;&#123;17&#125;)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="Description" /></td>
    <td><code>string</code></td>
    <td>The name or short description that's used to identify the certificate. (pattern: &lt;code&gt;&#91;\u0021-\u007E&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="InactiveDate" /></td>
    <td><code>string (date-time)</code></td>
    <td>An optional date that specifies when the certificate becomes inactive. If you do not specify a value, InactiveDate takes the same value as NotAfterDate, which is specified by the CA.</td>
</tr>
<tr>
    <td><CopyableCode code="Status" /></td>
    <td><code>string</code></td>
    <td>The certificate can be either ACTIVE, PENDING_ROTATION, or INACTIVE. PENDING_ROTATION means that this certificate will replace the current certificate when it expires. (ACTIVE, PENDING_ROTATION, INACTIVE)</td>
</tr>
<tr>
    <td><CopyableCode code="Type" /></td>
    <td><code>string</code></td>
    <td>The type for the certificate. If a private key has been specified for the certificate, its type is CERTIFICATE_WITH_PRIVATE_KEY. If there is no private key, the type is CERTIFICATE. (CERTIFICATE, CERTIFICATE_WITH_PRIVATE_KEY)</td>
</tr>
<tr>
    <td><CopyableCode code="Usage" /></td>
    <td><code>string</code></td>
    <td>Specifies how this certificate is used. It can be used in the following ways: SIGNING: For signing AS2 messages ENCRYPTION: For encrypting AS2 messages TLS: For securing AS2 communications sent over HTTPS (SIGNING, ENCRYPTION, TLS)</td>
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
    <td>Describes the certificate that's identified by the CertificateId. Transfer Family automatically publishes a Amazon CloudWatch metric called DaysUntilExpiry for imported certificates. This metric tracks the number of days until the certificate expires based on the InactiveDate. The metric is available in the AWS/Transfer namespace and includes the CertificateId as a dimension.</td>
</tr>
<tr>
    <td><a href="#list_certificates"><CopyableCode code="list_certificates" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns a list of the current certificates that have been imported into Transfer Family. If you want to limit the results to a certain number, supply a value for the MaxResults parameter. If you ran the command previously and received a value for the NextToken parameter, you can supply that value to continue listing certificates from where you left off.</td>
</tr>
<tr>
    <td><a href="#update_certificate"><CopyableCode code="update_certificate" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-CertificateId"><code>CertificateId</code></a></td>
    <td></td>
    <td>Updates the active and inactive dates for a certificate.</td>
</tr>
<tr>
    <td><a href="#delete_certificate"><CopyableCode code="delete_certificate" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the certificate that's specified in the CertificateId parameter.</td>
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

Describes the certificate that's identified by the CertificateId. Transfer Family automatically publishes a Amazon CloudWatch metric called DaysUntilExpiry for imported certificates. This metric tracks the number of days until the certificate expires based on the InactiveDate. The metric is available in the AWS/Transfer namespace and includes the CertificateId as a dimension.

```sql
SELECT
ActiveDate,
Arn,
Certificate,
CertificateChain,
CertificateId,
Description,
InactiveDate,
NotAfterDate,
NotBeforeDate,
Serial,
Status,
Tags,
Type,
Usage
FROM aws.transfer.certificates
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_certificates">

Returns a list of the current certificates that have been imported into Transfer Family. If you want to limit the results to a certain number, supply a value for the MaxResults parameter. If you ran the command previously and received a value for the NextToken parameter, you can supply that value to continue listing certificates from where you left off.

```sql
SELECT
ActiveDate,
Arn,
CertificateId,
Description,
InactiveDate,
Status,
Type,
Usage
FROM aws.transfer.certificates
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_certificate"
    values={[
        { label: 'update_certificate', value: 'update_certificate' }
    ]}
>
<TabItem value="update_certificate">

Updates the active and inactive dates for a certificate.

```sql
UPDATE aws.transfer.certificates
SET 
CertificateId = '{{ CertificateId }}',
ActiveDate = '{{ ActiveDate }}',
InactiveDate = '{{ InactiveDate }}',
Description = '{{ Description }}'
WHERE 
region = '{{ region }}' --required
AND CertificateId = '{{ CertificateId }}' --required
RETURNING
CertificateId;
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

Deletes the certificate that's specified in the CertificateId parameter.

```sql
DELETE FROM aws.transfer.certificates
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
