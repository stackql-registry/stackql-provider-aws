--- 
title: parameters_for_exports
hide_title: false
hide_table_of_contents: false
keywords:
  - parameters_for_exports
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

Creates, updates, deletes, gets or lists a <code>parameters_for_exports</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="parameters_for_exports" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.payment_cryptography.parameters_for_exports" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_parameters_for_export"
    values={[
        { label: 'get_parameters_for_export', value: 'get_parameters_for_export' }
    ]}
>
<TabItem value="get_parameters_for_export">

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
    <td><CopyableCode code="ExportToken" /></td>
    <td><code>string</code></td>
    <td>The export token to initiate key export from Amazon Web Services Payment Cryptography. The export token expires after 30 days. You can use the same export token to export multiple keys from the same service account. (pattern: &lt;code&gt;(export-token-&#91;0-9a-zA-Z&#93;&#123;16,64&#125;)?&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="ParametersValidUntilTimestamp" /></td>
    <td><code>string (date-time)</code></td>
    <td>The validity period of the export token.</td>
</tr>
<tr>
    <td><CopyableCode code="SigningKeyAlgorithm" /></td>
    <td><code>string</code></td>
    <td>The algorithm of the signing key certificate for use in TR-34 key block generation. RSA_2048 is the only signing key algorithm allowed. (TDES_2KEY, TDES_3KEY, AES_128, AES_192, AES_256, HMAC_SHA256, HMAC_SHA384, HMAC_SHA512, HMAC_SHA224, RSA_2048, RSA_3072, RSA_4096, ECC_NIST_P256, ECC_NIST_P384, ECC_NIST_P521)</td>
</tr>
<tr>
    <td><CopyableCode code="SigningKeyCertificate" /></td>
    <td><code>string</code></td>
    <td>The signing key certificate in PEM format (base64 encoded) of the public key for signature within the TR-34 key block. The certificate expires after 30 days. (pattern: &lt;code&gt;&#91;^\&#91;;\&#93;&lt;&gt;&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="SigningKeyCertificateChain" /></td>
    <td><code>string</code></td>
    <td>The root certificate authority (CA) that signed the signing key certificate in PEM format (base64 encoded). (pattern: &lt;code&gt;&#91;^\&#91;;\&#93;&lt;&gt;&#93;+&lt;/code&gt;)</td>
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
    <td><a href="#get_parameters_for_export"><CopyableCode code="get_parameters_for_export" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets the export token and the signing key certificate to initiate a TR-34 key export from Amazon Web Services Payment Cryptography. The signing key certificate signs the wrapped key under export within the TR-34 key payload. The export token and signing key certificate must be in place and operational before calling ExportKey. The export token expires in 30 days. You can use the same export token to export multiple keys from your service account. To return a previously generated export token and signing key certificate instead of generating new ones, set ReuseLastGeneratedToken to true. Cross-account use: This operation can't be used across different Amazon Web Services accounts. Related operations: ExportKey GetParametersForImport</td>
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
    defaultValue="get_parameters_for_export"
    values={[
        { label: 'get_parameters_for_export', value: 'get_parameters_for_export' }
    ]}
>
<TabItem value="get_parameters_for_export">

Gets the export token and the signing key certificate to initiate a TR-34 key export from Amazon Web Services Payment Cryptography. The signing key certificate signs the wrapped key under export within the TR-34 key payload. The export token and signing key certificate must be in place and operational before calling ExportKey. The export token expires in 30 days. You can use the same export token to export multiple keys from your service account. To return a previously generated export token and signing key certificate instead of generating new ones, set ReuseLastGeneratedToken to true. Cross-account use: This operation can't be used across different Amazon Web Services accounts. Related operations: ExportKey GetParametersForImport

```sql
SELECT
ExportToken,
ParametersValidUntilTimestamp,
SigningKeyAlgorithm,
SigningKeyCertificate,
SigningKeyCertificateChain
FROM aws.payment_cryptography.parameters_for_exports
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
