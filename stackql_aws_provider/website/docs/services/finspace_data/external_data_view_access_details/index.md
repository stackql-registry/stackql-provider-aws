--- 
title: external_data_view_access_details
hide_title: false
hide_table_of_contents: false
keywords:
  - external_data_view_access_details
  - finspace_data
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

Creates, updates, deletes, gets or lists an <code>external_data_view_access_details</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="external_data_view_access_details" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.finspace_data.external_data_view_access_details" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_external_data_view_access_details"
    values={[
        { label: 'get_external_data_view_access_details', value: 'get_external_data_view_access_details' }
    ]}
>
<TabItem value="get_external_data_view_access_details">

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
    <td><CopyableCode code="credentials" /></td>
    <td><code>object</code></td>
    <td>The credentials required to access the external Dataview from the S3 location.</td>
</tr>
<tr>
    <td><CopyableCode code="s3Location" /></td>
    <td><code>object</code></td>
    <td>The location where the external Dataview is stored.</td>
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
    <td><a href="#get_external_data_view_access_details"><CopyableCode code="get_external_data_view_access_details" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-dataview_id"><code>dataview_id</code></a>, <a href="#parameter-dataset_id"><code>dataset_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns the credentials to access the external Dataview from an S3 location. To call this API: You must retrieve the programmatic credentials. You must be a member of a FinSpace user group, where the dataset that you want to access has Read Dataset Data permissions.</td>
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
<tr id="parameter-dataset_id">
    <td><CopyableCode code="dataset_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier for the Dataset.</td>
</tr>
<tr id="parameter-dataview_id">
    <td><CopyableCode code="dataview_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier for the Dataview that you want to access.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_external_data_view_access_details"
    values={[
        { label: 'get_external_data_view_access_details', value: 'get_external_data_view_access_details' }
    ]}
>
<TabItem value="get_external_data_view_access_details">

Returns the credentials to access the external Dataview from an S3 location. To call this API: You must retrieve the programmatic credentials. You must be a member of a FinSpace user group, where the dataset that you want to access has Read Dataset Data permissions.

```sql
SELECT
credentials,
s3Location
FROM aws.finspace_data.external_data_view_access_details
WHERE dataview_id = '{{ dataview_id }}' -- required
AND dataset_id = '{{ dataset_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
