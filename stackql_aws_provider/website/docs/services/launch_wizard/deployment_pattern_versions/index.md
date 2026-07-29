--- 
title: deployment_pattern_versions
hide_title: false
hide_table_of_contents: false
keywords:
  - deployment_pattern_versions
  - launch_wizard
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

Creates, updates, deletes, gets or lists a <code>deployment_pattern_versions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="deployment_pattern_versions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.launch_wizard.deployment_pattern_versions" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_deployment_pattern_version"
    values={[
        { label: 'get_deployment_pattern_version', value: 'get_deployment_pattern_version' },
        { label: 'list_deployment_pattern_versions', value: 'list_deployment_pattern_versions' }
    ]}
>
<TabItem value="get_deployment_pattern_version">

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
    <td><CopyableCode code="deployment_pattern_name" /></td>
    <td><code>string</code></td>
    <td>The name of the deployment pattern.</td>
</tr>
<tr>
    <td><CopyableCode code="deployment_pattern_version_name" /></td>
    <td><code>string</code></td>
    <td>The name of the deployment pattern version.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the deployment pattern version.</td>
</tr>
<tr>
    <td><CopyableCode code="documentation_url" /></td>
    <td><code>string</code></td>
    <td>The URL of the documentation for the deployment pattern version.</td>
</tr>
<tr>
    <td><CopyableCode code="workload_name" /></td>
    <td><code>string</code></td>
    <td>The name of the workload.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_deployment_pattern_versions">

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
    <td><CopyableCode code="deployment_pattern_name" /></td>
    <td><code>string</code></td>
    <td>The name of the deployment pattern.</td>
</tr>
<tr>
    <td><CopyableCode code="deployment_pattern_version_name" /></td>
    <td><code>string</code></td>
    <td>The name of the deployment pattern version.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the deployment pattern version.</td>
</tr>
<tr>
    <td><CopyableCode code="documentation_url" /></td>
    <td><code>string</code></td>
    <td>The URL of the documentation for the deployment pattern version.</td>
</tr>
<tr>
    <td><CopyableCode code="workload_name" /></td>
    <td><code>string</code></td>
    <td>The name of the workload.</td>
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
    <td><a href="#get_deployment_pattern_version"><CopyableCode code="get_deployment_pattern_version" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns information about a deployment pattern version.</td>
</tr>
<tr>
    <td><a href="#list_deployment_pattern_versions"><CopyableCode code="list_deployment_pattern_versions" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists the deployment pattern versions.</td>
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
    defaultValue="get_deployment_pattern_version"
    values={[
        { label: 'get_deployment_pattern_version', value: 'get_deployment_pattern_version' },
        { label: 'list_deployment_pattern_versions', value: 'list_deployment_pattern_versions' }
    ]}
>
<TabItem value="get_deployment_pattern_version">

Returns information about a deployment pattern version.

```sql
SELECT
deployment_pattern_name,
deployment_pattern_version_name,
description,
documentation_url,
workload_name
FROM aws.launch_wizard.deployment_pattern_versions
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_deployment_pattern_versions">

Lists the deployment pattern versions.

```sql
SELECT
deployment_pattern_name,
deployment_pattern_version_name,
description,
documentation_url,
workload_name
FROM aws.launch_wizard.deployment_pattern_versions
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
