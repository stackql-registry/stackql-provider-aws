--- 
title: workload_deployment_patterns
hide_title: false
hide_table_of_contents: false
keywords:
  - workload_deployment_patterns
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

Creates, updates, deletes, gets or lists a <code>workload_deployment_patterns</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="workload_deployment_patterns" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.launch_wizard.workload_deployment_patterns" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_workload_deployment_pattern"
    values={[
        { label: 'get_workload_deployment_pattern', value: 'get_workload_deployment_pattern' },
        { label: 'list_workload_deployment_patterns', value: 'list_workload_deployment_patterns' }
    ]}
>
<TabItem value="get_workload_deployment_pattern">

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
    <td><CopyableCode code="deploymentPatternName" /></td>
    <td><code>string</code></td>
    <td>The name of the deployment pattern. (pattern: &lt;code&gt;&#91;A-Za-z0-9&#93;&#91;a-zA-Z0-9-&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="deploymentPatternVersionName" /></td>
    <td><code>string</code></td>
    <td>The version name of the deployment pattern. (pattern: &lt;code&gt;((&#91;A-Za-z0-9&#93;&#91;a-zA-Z0-9-&#93;*)|(\d+\.\d+\.\d+))&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the deployment pattern.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>The display name of the deployment pattern.</td>
</tr>
<tr>
    <td><CopyableCode code="specifications" /></td>
    <td><code>array</code></td>
    <td>The settings specified for the deployment. These settings define how to deploy and configure your resources created by the deployment. For more information about the specifications required for creating a deployment for a SAP workload, see SAP deployment specifications. To retrieve the specifications required to create a deployment for other workloads, use the GetWorkloadDeploymentPattern operation.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the deployment pattern. (ACTIVE, INACTIVE, DISABLED, DELETED)</td>
</tr>
<tr>
    <td><CopyableCode code="statusMessage" /></td>
    <td><code>string</code></td>
    <td>The status message of the deployment pattern.</td>
</tr>
<tr>
    <td><CopyableCode code="workloadName" /></td>
    <td><code>string</code></td>
    <td>The workload name of the deployment pattern. (pattern: &lt;code&gt;&#91;A-Za-z&#93;&#91;a-zA-Z0-9-_&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="workloadVersionName" /></td>
    <td><code>string</code></td>
    <td>The workload version name of the deployment pattern. (pattern: &lt;code&gt;((&#91;A-Za-z0-9&#93;&#91;a-zA-Z0-9-&#93;*)|(\d+\.\d+\.\d+))&lt;/code&gt;)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_workload_deployment_patterns">

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
    <td><CopyableCode code="deploymentPatternName" /></td>
    <td><code>string</code></td>
    <td>The name of a workload deployment pattern. (pattern: &lt;code&gt;&#91;A-Za-z0-9&#93;&#91;a-zA-Z0-9-&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="deploymentPatternVersionName" /></td>
    <td><code>string</code></td>
    <td>The version name of a workload deployment pattern. (pattern: &lt;code&gt;((&#91;A-Za-z0-9&#93;&#91;a-zA-Z0-9-&#93;*)|(\d+\.\d+\.\d+))&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of a workload deployment pattern.</td>
</tr>
<tr>
    <td><CopyableCode code="displayName" /></td>
    <td><code>string</code></td>
    <td>The display name of a workload deployment pattern.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of a workload deployment pattern. (ACTIVE, INACTIVE, DISABLED, DELETED)</td>
</tr>
<tr>
    <td><CopyableCode code="statusMessage" /></td>
    <td><code>string</code></td>
    <td>A message about a workload deployment pattern's status.</td>
</tr>
<tr>
    <td><CopyableCode code="workloadName" /></td>
    <td><code>string</code></td>
    <td>The name of the workload. (pattern: &lt;code&gt;&#91;A-Za-z&#93;&#91;a-zA-Z0-9-_&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="workloadVersionName" /></td>
    <td><code>string</code></td>
    <td>The name of the workload deployment pattern version. (pattern: &lt;code&gt;((&#91;A-Za-z0-9&#93;&#91;a-zA-Z0-9-&#93;*)|(\d+\.\d+\.\d+))&lt;/code&gt;)</td>
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
    <td><a href="#get_workload_deployment_pattern"><CopyableCode code="get_workload_deployment_pattern" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns details for a given workload and deployment pattern, including the available specifications. You can use the ListWorkloads operation to discover the available workload names and the ListWorkloadDeploymentPatterns operation to discover the available deployment pattern names of a given workload.</td>
</tr>
<tr>
    <td><a href="#list_workload_deployment_patterns"><CopyableCode code="list_workload_deployment_patterns" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists the workload deployment patterns for a given workload name. You can use the ListWorkloads operation to discover the available workload names.</td>
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
    defaultValue="get_workload_deployment_pattern"
    values={[
        { label: 'get_workload_deployment_pattern', value: 'get_workload_deployment_pattern' },
        { label: 'list_workload_deployment_patterns', value: 'list_workload_deployment_patterns' }
    ]}
>
<TabItem value="get_workload_deployment_pattern">

Returns details for a given workload and deployment pattern, including the available specifications. You can use the ListWorkloads operation to discover the available workload names and the ListWorkloadDeploymentPatterns operation to discover the available deployment pattern names of a given workload.

```sql
SELECT
deploymentPatternName,
deploymentPatternVersionName,
description,
displayName,
specifications,
status,
statusMessage,
workloadName,
workloadVersionName
FROM aws.launch_wizard.workload_deployment_patterns
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_workload_deployment_patterns">

Lists the workload deployment patterns for a given workload name. You can use the ListWorkloads operation to discover the available workload names.

```sql
SELECT
deploymentPatternName,
deploymentPatternVersionName,
description,
displayName,
status,
statusMessage,
workloadName,
workloadVersionName
FROM aws.launch_wizard.workload_deployment_patterns
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
