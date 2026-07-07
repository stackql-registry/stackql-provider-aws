--- 
title: connect_instance_integrations
hide_title: false
hide_table_of_contents: false
keywords:
  - connect_instance_integrations
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

Creates, updates, deletes, gets or lists a <code>connect_instance_integrations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="connect_instance_integrations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.connectcampaignsv2.connect_instance_integrations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_connect_instance_integrations"
    values={[
        { label: 'list_connect_instance_integrations', value: 'list_connect_instance_integrations' }
    ]}
>
<TabItem value="list_connect_instance_integrations">

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
    <td><CopyableCode code="customerProfiles" /></td>
    <td><code>object</code></td>
    <td>Customer Profiles integration summary</td>
</tr>
<tr>
    <td><CopyableCode code="lambda" /></td>
    <td><code>object</code></td>
    <td>Lambda integration summary</td>
</tr>
<tr>
    <td><CopyableCode code="qConnect" /></td>
    <td><code>object</code></td>
    <td>Q Connect integration summary</td>
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
    <td><a href="#list_connect_instance_integrations"><CopyableCode code="list_connect_instance_integrations" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-connect_instance_id"><code>connect_instance_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a></td>
    <td>Provides summary information about the integration under the specified Connect instance.</td>
</tr>
<tr>
    <td><a href="#put_connect_instance_integration"><CopyableCode code="put_connect_instance_integration" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-connect_instance_id"><code>connect_instance_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-integrationConfig"><code>integrationConfig</code></a></td>
    <td></td>
    <td>Put or update the integration for the specified Amazon Connect instance.</td>
</tr>
<tr>
    <td><a href="#delete_connect_instance_integration"><CopyableCode code="delete_connect_instance_integration" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-connect_instance_id"><code>connect_instance_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Delete the integration for the specified Amazon Connect instance.</td>
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
<tr id="parameter-connect_instance_id">
    <td><CopyableCode code="connect_instance_id" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td></td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_connect_instance_integrations"
    values={[
        { label: 'list_connect_instance_integrations', value: 'list_connect_instance_integrations' }
    ]}
>
<TabItem value="list_connect_instance_integrations">

Provides summary information about the integration under the specified Connect instance.

```sql
SELECT
customerProfiles,
lambda,
qConnect
FROM aws.connectcampaignsv2.connect_instance_integrations
WHERE connect_instance_id = '{{ connect_instance_id }}' -- required
AND region = '{{ region }}' -- required
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="put_connect_instance_integration"
    values={[
        { label: 'put_connect_instance_integration', value: 'put_connect_instance_integration' }
    ]}
>
<TabItem value="put_connect_instance_integration">

Put or update the integration for the specified Amazon Connect instance.

```sql
REPLACE aws.connectcampaignsv2.connect_instance_integrations
SET 
integrationConfig = '{{ integrationConfig }}'
WHERE 
connect_instance_id = '{{ connect_instance_id }}' --required
AND region = '{{ region }}' --required
AND integrationConfig = '{{ integrationConfig }}' --required;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_connect_instance_integration"
    values={[
        { label: 'delete_connect_instance_integration', value: 'delete_connect_instance_integration' }
    ]}
>
<TabItem value="delete_connect_instance_integration">

Delete the integration for the specified Amazon Connect instance.

```sql
DELETE FROM aws.connectcampaignsv2.connect_instance_integrations
WHERE connect_instance_id = '{{ connect_instance_id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
