--- 
title: algorithms
hide_title: false
hide_table_of_contents: false
keywords:
  - algorithms
  - personalize
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

Creates, updates, deletes, gets or lists an <code>algorithms</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="algorithms" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.personalize.algorithms" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_algorithm"
    values={[
        { label: 'describe_algorithm', value: 'describe_algorithm' }
    ]}
>
<TabItem value="describe_algorithm">

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
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the algorithm. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9&#93;&#91;a-zA-Z0-9\-_&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="algorithm_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the algorithm. (pattern: &lt;code&gt;arn:(&#91;a-z\d-&#93;+):personalize:.*:.*:.+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="algorithm_image" /></td>
    <td><code>object</code></td>
    <td>The URI of the Docker container for the algorithm image.</td>
</tr>
<tr>
    <td><CopyableCode code="creation_date_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time (in Unix time) that the algorithm was created.</td>
</tr>
<tr>
    <td><CopyableCode code="default_hyper_parameter_ranges" /></td>
    <td><code>object</code></td>
    <td>Specifies the default hyperparameters, their ranges, and whether they are tunable. A tunable hyperparameter can have its value determined during hyperparameter optimization (HPO).</td>
</tr>
<tr>
    <td><CopyableCode code="default_hyper_parameters" /></td>
    <td><code>object</code></td>
    <td>Specifies the default hyperparameters.</td>
</tr>
<tr>
    <td><CopyableCode code="default_resource_config" /></td>
    <td><code>object</code></td>
    <td>Specifies the default maximum number of training jobs and parallel training jobs.</td>
</tr>
<tr>
    <td><CopyableCode code="last_updated_date_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time (in Unix time) that the algorithm was last updated.</td>
</tr>
<tr>
    <td><CopyableCode code="role_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the role. (pattern: &lt;code&gt;arn:(&#91;a-z\d-&#93;+):personalize:.*:.*:.+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="training_input_mode" /></td>
    <td><code>string</code></td>
    <td>The training input mode.</td>
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
    <td><a href="#describe_algorithm"><CopyableCode code="describe_algorithm" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Describes the given algorithm.</td>
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
    defaultValue="describe_algorithm"
    values={[
        { label: 'describe_algorithm', value: 'describe_algorithm' }
    ]}
>
<TabItem value="describe_algorithm">

Describes the given algorithm.

```sql
SELECT
name,
algorithm_arn,
algorithm_image,
creation_date_time,
default_hyper_parameter_ranges,
default_hyper_parameters,
default_resource_config,
last_updated_date_time,
role_arn,
training_input_mode
FROM aws.personalize.algorithms
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
