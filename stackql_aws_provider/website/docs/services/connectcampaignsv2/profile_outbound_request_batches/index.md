--- 
title: profile_outbound_request_batches
hide_title: false
hide_table_of_contents: false
keywords:
  - profile_outbound_request_batches
  - connectcampaignsv2
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

Creates, updates, deletes, gets or lists a <code>profile_outbound_request_batches</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="profile_outbound_request_batches" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.connectcampaignsv2.profile_outbound_request_batches" /></td></tr>
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
    <td><a href="#put_profile_outbound_request_batch"><CopyableCode code="put_profile_outbound_request_batch" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-profileOutboundRequests"><code>profileOutboundRequests</code></a></td>
    <td></td>
    <td>Takes in a list of profile outbound requests to be placed as part of an outbound campaign. This API is idempotent.</td>
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
    <td></td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
</tbody>
</table>

## `REPLACE` examples

<Tabs
    defaultValue="put_profile_outbound_request_batch"
    values={[
        { label: 'put_profile_outbound_request_batch', value: 'put_profile_outbound_request_batch' }
    ]}
>
<TabItem value="put_profile_outbound_request_batch">

Takes in a list of profile outbound requests to be placed as part of an outbound campaign. This API is idempotent.

```sql
REPLACE aws.connectcampaignsv2.profile_outbound_request_batches
SET 
profileOutboundRequests = '{{ profileOutboundRequests }}'
WHERE 
id = '{{ id }}' --required
AND region = '{{ region }}' --required
AND profileOutboundRequests = '{{ profileOutboundRequests }}' --required
RETURNING
failed_requests,
successful_requests;
```
</TabItem>
</Tabs>
