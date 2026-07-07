--- 
title: revocation_status
hide_title: false
hide_table_of_contents: false
keywords:
  - revocation_status
  - signer_data
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
<tr><td><b>Id</b></td><td><CopyableCode code="aws.signer_data.revocation_status" /></td></tr>
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
    <td>List of entity identifiers that have been revoked. Empty if no revocations found.</td>
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
    <td>Retrieves the revocation status for a signed artifact by checking if the signing profile, job, or certificate has been revoked.</td>
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
    <td>List of certificate hashes to check for revocation.</td>
</tr>
<tr id="parameter-jobArn">
    <td><CopyableCode code="jobArn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the signing job that produced the signature.</td>
</tr>
<tr id="parameter-platformId">
    <td><CopyableCode code="platformId" /></td>
    <td><code>string</code></td>
    <td>The platform identifier for the signing platform used.</td>
</tr>
<tr id="parameter-profileVersionArn">
    <td><CopyableCode code="profileVersionArn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the signing profile version used to sign the artifact.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-signatureTimestamp">
    <td><CopyableCode code="signatureTimestamp" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the artifact was signed, in ISO 8601 format.</td>
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

Retrieves the revocation status for a signed artifact by checking if the signing profile, job, or certificate has been revoked.

```sql
SELECT
revoked_entity
FROM aws.signer_data.revocation_status
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
