--- 
title: parameters_for_imports
hide_title: false
hide_table_of_contents: false
keywords:
  - parameters_for_imports
  - payment_cryptography
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

Creates, updates, deletes, gets or lists a <code>parameters_for_imports</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="parameters_for_imports" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.payment_cryptography.parameters_for_imports" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_parameters_for_import"
    values={[
        { label: 'get_parameters_for_import', value: 'get_parameters_for_import' }
    ]}
>
<TabItem value="get_parameters_for_import">

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
    <td><CopyableCode code="import_token" /></td>
    <td><code>string</code></td>
    <td>The import token to initiate key import into Amazon Web Services Payment Cryptography. The import token expires after 30 days. You can use the same import token to import multiple keys to the same service account. (pattern: &lt;code&gt;(import-token-&#91;0-9a-zA-Z&#93;&#123;16,64&#125;)?&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="parameters_valid_until_timestamp" /></td>
    <td><code>string (date-time)</code></td>
    <td>The validity period of the import token.</td>
</tr>
<tr>
    <td><CopyableCode code="wrapping_key_algorithm" /></td>
    <td><code>string</code></td>
    <td>The algorithm of the wrapping key for use within TR-34 WrappedKeyBlock or RSA WrappedKeyCryptogram. (TDES_2KEY, TDES_3KEY, AES_128, AES_192, AES_256, HMAC_SHA256, HMAC_SHA384, HMAC_SHA512, HMAC_SHA224, RSA_2048, RSA_3072, RSA_4096, ECC_NIST_P256, ECC_NIST_P384, ECC_NIST_P521)</td>
</tr>
<tr>
    <td><CopyableCode code="wrapping_key_certificate" /></td>
    <td><code>string</code></td>
    <td>The wrapping key certificate in PEM format (base64 encoded) of the wrapping key for use within the TR-34 key block. The certificate expires in 30 days. (pattern: &lt;code&gt;&#91;^\&#91;;\&#93;&lt;&gt;&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="wrapping_key_certificate_chain" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services Payment Cryptography root certificate authority (CA) that signed the wrapping key certificate in PEM format (base64 encoded). (pattern: &lt;code&gt;&#91;^\&#91;;\&#93;&lt;&gt;&#93;+&lt;/code&gt;)</td>
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
    <td><a href="#get_parameters_for_import"><CopyableCode code="get_parameters_for_import" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets the import token and the wrapping key certificate in PEM format (base64 encoded) to initiate a TR-34 WrappedKeyBlock or a RSA WrappedKeyCryptogram import into Amazon Web Services Payment Cryptography. The wrapping key certificate wraps the key under import. The import token and wrapping key certificate must be in place and operational before calling ImportKey. The import token expires in 30 days. You can use the same import token to import multiple keys into your service account. To return a previously generated import token and wrapping key certificate instead of generating new ones, set ReuseLastGeneratedToken to true. Cross-account use: This operation can't be used across different Amazon Web Services accounts. Related operations: GetParametersForExport ImportKey</td>
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
    defaultValue="get_parameters_for_import"
    values={[
        { label: 'get_parameters_for_import', value: 'get_parameters_for_import' }
    ]}
>
<TabItem value="get_parameters_for_import">

Gets the import token and the wrapping key certificate in PEM format (base64 encoded) to initiate a TR-34 WrappedKeyBlock or a RSA WrappedKeyCryptogram import into Amazon Web Services Payment Cryptography. The wrapping key certificate wraps the key under import. The import token and wrapping key certificate must be in place and operational before calling ImportKey. The import token expires in 30 days. You can use the same import token to import multiple keys into your service account. To return a previously generated import token and wrapping key certificate instead of generating new ones, set ReuseLastGeneratedToken to true. Cross-account use: This operation can't be used across different Amazon Web Services accounts. Related operations: GetParametersForExport ImportKey

```sql
SELECT
import_token,
parameters_valid_until_timestamp,
wrapping_key_algorithm,
wrapping_key_certificate,
wrapping_key_certificate_chain
FROM aws.payment_cryptography.parameters_for_imports
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
