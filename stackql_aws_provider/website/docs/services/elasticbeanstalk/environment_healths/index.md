--- 
title: environment_healths
hide_title: false
hide_table_of_contents: false
keywords:
  - environment_healths
  - elasticbeanstalk
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

Creates, updates, deletes, gets or lists an <code>environment_healths</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="environment_healths" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.elasticbeanstalk.environment_healths" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_environment_health"
    values={[
        { label: 'describe_environment_health', value: 'describe_environment_health' }
    ]}
>
<TabItem value="describe_environment_health">

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
    <td><CopyableCode code="environment_name" /></td>
    <td><code>string</code></td>
    <td>The environment's name.</td>
</tr>
<tr>
    <td><CopyableCode code="application_metrics" /></td>
    <td><code>object</code></td>
    <td>Application request metrics for the environment.</td>
</tr>
<tr>
    <td><CopyableCode code="causes" /></td>
    <td><code>array</code></td>
    <td>Descriptions of the data that contributed to the environment's current health status.</td>
</tr>
<tr>
    <td><CopyableCode code="color" /></td>
    <td><code>string</code></td>
    <td>The health color of the environment.</td>
</tr>
<tr>
    <td><CopyableCode code="health_status" /></td>
    <td><code>string</code></td>
    <td>The health status of the environment. For example, Ok.</td>
</tr>
<tr>
    <td><CopyableCode code="instances_health" /></td>
    <td><code>object</code></td>
    <td>Summary health information for the instances in the environment.</td>
</tr>
<tr>
    <td><CopyableCode code="refreshed_at" /></td>
    <td><code>string</code></td>
    <td>The date and time that the health information was retrieved.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The environment's operational status. Ready, Launching, Updating, Terminating, or Terminated.</td>
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
    <td><a href="#describe_environment_health"><CopyableCode code="describe_environment_health" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-EnvironmentName"><code>EnvironmentName</code></a>, <a href="#parameter-EnvironmentId"><code>EnvironmentId</code></a>, <a href="#parameter-AttributeNames"><code>AttributeNames</code></a></td>
    <td>Returns information about the overall health of the specified environment. The DescribeEnvironmentHealth operation is only available with AWS Elastic Beanstalk Enhanced Health.</td>
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
<tr id="parameter-AttributeNames">
    <td><CopyableCode code="AttributeNames" /></td>
    <td><code>array</code></td>
    <td>Specify the response elements to return. To retrieve all attributes, set to All. If no attribute names are specified, returns the name of the environment.</td>
</tr>
<tr id="parameter-EnvironmentId">
    <td><CopyableCode code="EnvironmentId" /></td>
    <td><code>string</code></td>
    <td>Specify the environment by ID. You must specify either this or an EnvironmentName, or both.</td>
</tr>
<tr id="parameter-EnvironmentName">
    <td><CopyableCode code="EnvironmentName" /></td>
    <td><code>string</code></td>
    <td>Specify the environment by name. You must specify either this or an EnvironmentName, or both.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_environment_health"
    values={[
        { label: 'describe_environment_health', value: 'describe_environment_health' }
    ]}
>
<TabItem value="describe_environment_health">

Returns information about the overall health of the specified environment. The DescribeEnvironmentHealth operation is only available with AWS Elastic Beanstalk Enhanced Health.

```sql
SELECT
environment_name,
application_metrics,
causes,
color,
health_status,
instances_health,
refreshed_at,
status
FROM aws.elasticbeanstalk.environment_healths
WHERE region = '{{ region }}' -- required
AND EnvironmentName = '{{ EnvironmentName }}'
AND EnvironmentId = '{{ EnvironmentId }}'
AND AttributeNames = '{{ AttributeNames }}'
;
```
</TabItem>
</Tabs>
