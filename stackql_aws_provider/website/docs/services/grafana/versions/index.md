--- 
title: versions
hide_title: false
hide_table_of_contents: false
keywords:
  - versions
  - grafana
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

Creates, updates, deletes, gets or lists a <code>versions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="versions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.grafana.versions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_versions"
    values={[
        { label: 'list_versions', value: 'list_versions' }
    ]}
>
<TabItem value="list_versions">

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
    <td><CopyableCode code="grafana_version" /></td>
    <td><code>string</code></td>
    <td>The Grafana versions available to create. If a workspace ID is included in the request, the Grafana versions to which this workspace can be upgraded.</td>
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
    <td><a href="#list_versions"><CopyableCode code="list_versions" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-workspace-id"><code>workspace-id</code></a></td>
    <td>Lists available versions of Grafana. These are available when calling CreateWorkspace. Optionally, include a workspace to list the versions to which it can be upgraded.</td>
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
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to include in the response.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The token to use when requesting the next set of results. You receive this token from a previous ListVersions operation.</td>
</tr>
<tr id="parameter-workspace-id">
    <td><CopyableCode code="workspace-id" /></td>
    <td><code>string</code></td>
    <td>The ID of the workspace to list the available upgrade versions. If not included, lists all versions of Grafana that are supported for CreateWorkspace.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_versions"
    values={[
        { label: 'list_versions', value: 'list_versions' }
    ]}
>
<TabItem value="list_versions">

Lists available versions of Grafana. These are available when calling CreateWorkspace. Optionally, include a workspace to list the versions to which it can be upgraded.

```sql
SELECT
grafana_version
FROM aws.grafana.versions
WHERE region = '{{ region }}' -- required
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
AND `workspace-id` = '{{ workspace-id }}'
;
```
</TabItem>
</Tabs>
