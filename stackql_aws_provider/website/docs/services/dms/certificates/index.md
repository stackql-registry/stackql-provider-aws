--- 
title: certificates
hide_title: false
hide_table_of_contents: false
keywords:
  - certificates
  - dms
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
<tr><td><b>Id</b></td><td><CopyableCode code="aws.dms.certificates" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_certificates"
    values={[
        { label: 'describe_certificates', value: 'describe_certificates' }
    ]}
>
<TabItem value="describe_certificates">

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
    <td><CopyableCode code="CertificateArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) for the certificate.</td>
</tr>
<tr>
    <td><CopyableCode code="CertificateCreationDate" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date that the certificate was created.</td>
</tr>
<tr>
    <td><CopyableCode code="CertificateIdentifier" /></td>
    <td><code>string</code></td>
    <td>A customer-assigned name for the certificate. Identifiers must begin with a letter and must contain only ASCII letters, digits, and hyphens. They can't end with a hyphen or contain two consecutive hyphens.</td>
</tr>
<tr>
    <td><CopyableCode code="CertificateOwner" /></td>
    <td><code>string</code></td>
    <td>The owner of the certificate.</td>
</tr>
<tr>
    <td><CopyableCode code="CertificatePem" /></td>
    <td><code>string</code></td>
    <td>The contents of a .pem file, which contains an X.509 certificate.</td>
</tr>
<tr>
    <td><CopyableCode code="CertificateWallet" /></td>
    <td><code>string (byte)</code></td>
    <td>The location of an imported Oracle Wallet certificate for use with SSL. Example: filebase64("$&#123;path.root&#125;/rds-ca-2019-root.sso")</td>
</tr>
<tr>
    <td><CopyableCode code="KeyLength" /></td>
    <td><code>integer</code></td>
    <td>The key length of the cryptographic algorithm being used.</td>
</tr>
<tr>
    <td><CopyableCode code="KmsKeyId" /></td>
    <td><code>string</code></td>
    <td>An KMS key identifier that is used to encrypt the certificate. If you don't specify a value for the KmsKeyId parameter, then DMS uses your default encryption key. KMS creates the default encryption key for your Amazon Web Services account. Your Amazon Web Services account has a different default encryption key for each Amazon Web Services Region.</td>
</tr>
<tr>
    <td><CopyableCode code="SigningAlgorithm" /></td>
    <td><code>string</code></td>
    <td>The signing algorithm for the certificate.</td>
</tr>
<tr>
    <td><CopyableCode code="ValidFromDate" /></td>
    <td><code>string (date-time)</code></td>
    <td>The beginning date that the certificate is valid.</td>
</tr>
<tr>
    <td><CopyableCode code="ValidToDate" /></td>
    <td><code>string (date-time)</code></td>
    <td>The final date that the certificate is valid.</td>
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
    <td><a href="#describe_certificates"><CopyableCode code="describe_certificates" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Provides a description of the certificate.</td>
</tr>
<tr>
    <td><a href="#delete_certificate"><CopyableCode code="delete_certificate" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the specified certificate.</td>
</tr>
<tr>
    <td><a href="#import_certificate"><CopyableCode code="import_certificate" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-CertificateIdentifier"><code>CertificateIdentifier</code></a></td>
    <td></td>
    <td>Uploads the specified certificate.</td>
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
    defaultValue="describe_certificates"
    values={[
        { label: 'describe_certificates', value: 'describe_certificates' }
    ]}
>
<TabItem value="describe_certificates">

Provides a description of the certificate.

```sql
SELECT
CertificateArn,
CertificateCreationDate,
CertificateIdentifier,
CertificateOwner,
CertificatePem,
CertificateWallet,
KeyLength,
KmsKeyId,
SigningAlgorithm,
ValidFromDate,
ValidToDate
FROM aws.dms.certificates
WHERE region = '{{ region }}' -- required
;
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

Deletes the specified certificate.

```sql
DELETE FROM aws.dms.certificates
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="import_certificate"
    values={[
        { label: 'import_certificate', value: 'import_certificate' }
    ]}
>
<TabItem value="import_certificate">

Uploads the specified certificate.

```sql
EXEC aws.dms.certificates.import_certificate 
@region='{{ region }}' --required 
@@json=
'{
"CertificateIdentifier": "{{ CertificateIdentifier }}", 
"CertificatePem": "{{ CertificatePem }}", 
"CertificateWallet": "{{ CertificateWallet }}", 
"Tags": "{{ Tags }}", 
"KmsKeyId": "{{ KmsKeyId }}"
}'
;
```
</TabItem>
</Tabs>
