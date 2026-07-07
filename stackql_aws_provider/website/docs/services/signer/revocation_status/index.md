--- 
title: revocation_status
hide_title: false
hide_table_of_contents: false
keywords:
  - revocation_status
  - signer
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

Creates, updates, deletes, gets or lists a <code>revocation_status</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="revocation_status" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.signer.revocation_status" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_revocation_status"
    values={[
        { label: 'get_revocation_status', value: 'get_revocation_status' }
    ]}
>
<TabItem value="get_revocation_status">

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
    <td><CopyableCode code="revoked_entity" /></td>
    <td><code>string</code></td>
    <td>A list of revoked entities (including zero or more of the signing profile ARN, signing job ARN, and certificate hashes) supplied as input to the API.</td>
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
    <td><a href="#get_revocation_status"><CopyableCode code="get_revocation_status" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-signatureTimestamp"><code>signatureTimestamp</code></a>, <a href="#parameter-platformId"><code>platformId</code></a>, <a href="#parameter-profileVersionArn"><code>profileVersionArn</code></a>, <a href="#parameter-jobArn"><code>jobArn</code></a>, <a href="#parameter-certificateHashes"><code>certificateHashes</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves the revocation status of one or more of the signing profile, signing job, and signing certificate.</td>
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
<tr id="parameter-certificateHashes">
    <td><CopyableCode code="certificateHashes" /></td>
    <td><code>array</code></td>
    <td>A list of composite signed hashes that identify certificates. A certificate identifier consists of a subject certificate TBS hash (signed by the parent CA) combined with a parent CA TBS hash (signed by the parent CA’s CA). Root certificates are defined as their own CA. The following example shows how to calculate a hash for this parameter using OpenSSL commands: openssl asn1parse -in childCert.pem -strparse 4 -out childCert.tbs openssl sha384 &lt; childCert.tbs -binary &gt; childCertTbsHash openssl asn1parse -in parentCert.pem -strparse 4 -out parentCert.tbs openssl sha384 &lt; parentCert.tbs -binary &gt; parentCertTbsHash xxd -p childCertTbsHash &gt; certificateHash.hex xxd -p parentCertTbsHash &gt;&gt; certificateHash.hex cat certificateHash.hex | tr -d '\n'</td>
</tr>
<tr id="parameter-jobArn">
    <td><CopyableCode code="jobArn" /></td>
    <td><code>string</code></td>
    <td>The ARN of a signing job.</td>
</tr>
<tr id="parameter-platformId">
    <td><CopyableCode code="platformId" /></td>
    <td><code>string</code></td>
    <td>The ID of a signing platform.</td>
</tr>
<tr id="parameter-profileVersionArn">
    <td><CopyableCode code="profileVersionArn" /></td>
    <td><code>string</code></td>
    <td>The version of a signing profile.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-signatureTimestamp">
    <td><CopyableCode code="signatureTimestamp" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp of the signature that validates the profile or job.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_revocation_status"
    values={[
        { label: 'get_revocation_status', value: 'get_revocation_status' }
    ]}
>
<TabItem value="get_revocation_status">

Retrieves the revocation status of one or more of the signing profile, signing job, and signing certificate.

```sql
SELECT
revoked_entity
FROM aws.signer.revocation_status
WHERE signatureTimestamp = '{{ signatureTimestamp }}' -- required
AND platformId = '{{ platformId }}' -- required
AND profileVersionArn = '{{ profileVersionArn }}' -- required
AND jobArn = '{{ jobArn }}' -- required
AND certificateHashes = '{{ certificateHashes }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
