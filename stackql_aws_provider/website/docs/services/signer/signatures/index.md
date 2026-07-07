--- 
title: signatures
hide_title: false
hide_table_of_contents: false
keywords:
  - signatures
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

Creates, updates, deletes, gets or lists a <code>signatures</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="signatures" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.signer.signatures" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

`SELECT` not supported for this resource, use `SHOW METHODS` to view available operations for the resource.


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
    <td><a href="#revoke_signature"><CopyableCode code="revoke_signature" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-job_id"><code>job_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-reason"><code>reason</code></a></td>
    <td></td>
    <td>Changes the state of a signing job to REVOKED. This indicates that the signature is no longer valid.</td>
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
<tr id="parameter-job_id">
    <td><CopyableCode code="job_id" /></td>
    <td><code>string</code></td>
    <td>ID of the signing job to be revoked.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
</tbody>
</table>

## `UPDATE` examples

<Tabs
    defaultValue="revoke_signature"
    values={[
        { label: 'revoke_signature', value: 'revoke_signature' }
    ]}
>
<TabItem value="revoke_signature">

Changes the state of a signing job to REVOKED. This indicates that the signature is no longer valid.

```sql
UPDATE aws.signer.signatures
SET 
jobOwner = '{{ jobOwner }}',
reason = '{{ reason }}'
WHERE 
job_id = '{{ job_id }}' --required
AND region = '{{ region }}' --required
AND reason = '{{ reason }}' --required;
```
</TabItem>
</Tabs>
