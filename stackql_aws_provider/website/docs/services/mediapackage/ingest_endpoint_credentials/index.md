--- 
title: ingest_endpoint_credentials
hide_title: false
hide_table_of_contents: false
keywords:
  - ingest_endpoint_credentials
  - mediapackage
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

Creates, updates, deletes, gets or lists an <code>ingest_endpoint_credentials</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="ingest_endpoint_credentials" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.mediapackage.ingest_endpoint_credentials" /></td></tr>
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
    <td><a href="#rotate_ingest_endpoint_credentials"><CopyableCode code="rotate_ingest_endpoint_credentials" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-ingest_endpoint_id"><code>ingest_endpoint_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Rotate the IngestEndpoint's username and password, as specified by the IngestEndpoint's id.</td>
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
<tr id="parameter-id">
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The ID of the channel the IngestEndpoint is on.</td>
</tr>
<tr id="parameter-ingest_endpoint_id">
    <td><CopyableCode code="ingest_endpoint_id" /></td>
    <td><code>string</code></td>
    <td>The id of the IngestEndpoint whose credentials should be rotated</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
</tbody>
</table>

## Lifecycle Methods

<Tabs
    defaultValue="rotate_ingest_endpoint_credentials"
    values={[
        { label: 'rotate_ingest_endpoint_credentials', value: 'rotate_ingest_endpoint_credentials' }
    ]}
>
<TabItem value="rotate_ingest_endpoint_credentials">

Rotate the IngestEndpoint's username and password, as specified by the IngestEndpoint's id.

```sql
EXEC aws.mediapackage.ingest_endpoint_credentials.rotate_ingest_endpoint_credentials 
@id='{{ id }}' --required, 
@ingest_endpoint_id='{{ ingest_endpoint_id }}' --required, 
@region='{{ region }}' --required
;
```
</TabItem>
</Tabs>
