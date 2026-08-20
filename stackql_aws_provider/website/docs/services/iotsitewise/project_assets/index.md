--- 
title: project_assets
hide_title: false
hide_table_of_contents: false
keywords:
  - project_assets
  - iotsitewise
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

Creates, updates, deletes, gets or lists a <code>project_assets</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="project_assets" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.iotsitewise.project_assets" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_project_assets"
    values={[
        { label: 'list_project_assets', value: 'list_project_assets' }
    ]}
>
<TabItem value="list_project_assets">

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
    <td><CopyableCode code="asset_id" /></td>
    <td><code>string</code></td>
    <td>A list that contains the IDs of each asset associated with the project.</td>
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
    <td><a href="#list_project_assets"><CopyableCode code="list_project_assets" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-project_id"><code>project_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a></td>
    <td>Retrieves a paginated list of assets associated with an IoT SiteWise Monitor project.</td>
</tr>
<tr>
    <td><a href="#batch_associate_project_assets"><CopyableCode code="batch_associate_project_assets" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-project_id"><code>project_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-assetIds"><code>assetIds</code></a></td>
    <td></td>
    <td>The IoT SiteWise Monitor feature will no longer be open to new customers starting November 7, 2025. If you would like to use the IoT SiteWise Monitor feature, sign up prior to that date. Existing customers can continue to use the service as normal. For more information, see IoT SiteWise Monitor availability change. Associates a group (batch) of assets with an IoT SiteWise Monitor project.</td>
</tr>
<tr>
    <td><a href="#batch_disassociate_project_assets"><CopyableCode code="batch_disassociate_project_assets" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-project_id"><code>project_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-assetIds"><code>assetIds</code></a></td>
    <td></td>
    <td>Disassociates a group (batch) of assets from an IoT SiteWise Monitor project.</td>
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
<tr id="parameter-project_id">
    <td><CopyableCode code="project_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the project from which to disassociate the assets.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return for each paginated request. Default: 50</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The token to be used for the next set of paginated results.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_project_assets"
    values={[
        { label: 'list_project_assets', value: 'list_project_assets' }
    ]}
>
<TabItem value="list_project_assets">

Retrieves a paginated list of assets associated with an IoT SiteWise Monitor project.

```sql
SELECT
asset_id
FROM aws.iotsitewise.project_assets
WHERE project_id = '{{ project_id }}' -- required
AND region = '{{ region }}' -- required
AND nextToken = '{{ nextToken }}'
AND maxResults = '{{ maxResults }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="batch_associate_project_assets"
    values={[
        { label: 'batch_associate_project_assets', value: 'batch_associate_project_assets' },
        { label: 'batch_disassociate_project_assets', value: 'batch_disassociate_project_assets' }
    ]}
>
<TabItem value="batch_associate_project_assets">

The IoT SiteWise Monitor feature will no longer be open to new customers starting November 7, 2025. If you would like to use the IoT SiteWise Monitor feature, sign up prior to that date. Existing customers can continue to use the service as normal. For more information, see IoT SiteWise Monitor availability change. Associates a group (batch) of assets with an IoT SiteWise Monitor project.

```sql
EXEC aws.iotsitewise.project_assets.batch_associate_project_assets 
@project_id='{{ project_id }}' --required, 
@region='{{ region }}' --required 
@@json=
'{
"assetIds": "{{ assetIds }}", 
"clientToken": "{{ clientToken }}"
}'
;
```
</TabItem>
<TabItem value="batch_disassociate_project_assets">

Disassociates a group (batch) of assets from an IoT SiteWise Monitor project.

```sql
EXEC aws.iotsitewise.project_assets.batch_disassociate_project_assets 
@project_id='{{ project_id }}' --required, 
@region='{{ region }}' --required 
@@json=
'{
"assetIds": "{{ assetIds }}", 
"clientToken": "{{ clientToken }}"
}'
;
```
</TabItem>
</Tabs>
