--- 
title: flywheel_iterations
hide_title: false
hide_table_of_contents: false
keywords:
  - flywheel_iterations
  - comprehend
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

Creates, updates, deletes, gets or lists a <code>flywheel_iterations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="flywheel_iterations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.comprehend.flywheel_iterations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_flywheel_iteration"
    values={[
        { label: 'describe_flywheel_iteration', value: 'describe_flywheel_iteration' }
    ]}
>
<TabItem value="describe_flywheel_iteration">

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
    <td><CopyableCode code="CreationTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The creation start time of the flywheel iteration.</td>
</tr>
<tr>
    <td><CopyableCode code="EndTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The completion time of this flywheel iteration.</td>
</tr>
<tr>
    <td><CopyableCode code="EvaluatedModelArn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the evaluated model associated with this flywheel iteration. (pattern: &lt;code&gt;arn:aws(-&#91;^:&#93;+)?:comprehend:&#91;a-zA-Z0-9-&#93;*:&#91;0-9&#93;&#123;12&#125;:(document-classifier|entity-recognizer)/&#91;a-zA-Z0-9&#93;(-*&#91;a-zA-Z0-9&#93;)*(/version/&#91;a-zA-Z0-9&#93;(-*&#91;a-zA-Z0-9&#93;)*)?&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="EvaluatedModelMetrics" /></td>
    <td><code>object</code></td>
    <td>The evaluation metrics associated with the evaluated model.</td>
</tr>
<tr>
    <td><CopyableCode code="EvaluationManifestS3Prefix" /></td>
    <td><code>string</code></td>
    <td> (pattern: &lt;code&gt;s3:​//&#91;a-z0-9&#93;&#91;\.\-a-z0-9&#93;&#123;1,61&#125;&#91;a-z0-9&#93;(/.*)?&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="FlywheelArn" /></td>
    <td><code>string</code></td>
    <td> (pattern: &lt;code&gt;arn:aws(-&#91;^:&#93;+)?:comprehend:&#91;a-zA-Z0-9-&#93;*:&#91;0-9&#93;&#123;12&#125;:flywheel/&#91;a-zA-Z0-9&#93;(-*&#91;a-zA-Z0-9&#93;)*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="FlywheelIterationId" /></td>
    <td><code>string</code></td>
    <td> (pattern: &lt;code&gt;&#91;0-9&#93;&#123;8&#125;T&#91;0-9&#93;&#123;6&#125;Z&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="Message" /></td>
    <td><code>string</code></td>
    <td>A description of the status of the flywheel iteration.</td>
</tr>
<tr>
    <td><CopyableCode code="Status" /></td>
    <td><code>string</code></td>
    <td>The status of the flywheel iteration. (TRAINING, EVALUATING, COMPLETED, FAILED, STOP_REQUESTED, STOPPED)</td>
</tr>
<tr>
    <td><CopyableCode code="TrainedModelArn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the trained model associated with this flywheel iteration. (pattern: &lt;code&gt;arn:aws(-&#91;^:&#93;+)?:comprehend:&#91;a-zA-Z0-9-&#93;*:&#91;0-9&#93;&#123;12&#125;:(document-classifier|entity-recognizer)/&#91;a-zA-Z0-9&#93;(-*&#91;a-zA-Z0-9&#93;)*(/version/&#91;a-zA-Z0-9&#93;(-*&#91;a-zA-Z0-9&#93;)*)?&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="TrainedModelMetrics" /></td>
    <td><code>object</code></td>
    <td>The evaluation metrics associated with the evaluated model.</td>
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
    <td><a href="#describe_flywheel_iteration"><CopyableCode code="describe_flywheel_iteration" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieve the configuration properties of a flywheel iteration. For more information about flywheels, see Flywheel overview in the Amazon Comprehend Developer Guide.</td>
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
    defaultValue="describe_flywheel_iteration"
    values={[
        { label: 'describe_flywheel_iteration', value: 'describe_flywheel_iteration' }
    ]}
>
<TabItem value="describe_flywheel_iteration">

Retrieve the configuration properties of a flywheel iteration. For more information about flywheels, see Flywheel overview in the Amazon Comprehend Developer Guide.

```sql
SELECT
CreationTime,
EndTime,
EvaluatedModelArn,
EvaluatedModelMetrics,
EvaluationManifestS3Prefix,
FlywheelArn,
FlywheelIterationId,
Message,
Status,
TrainedModelArn,
TrainedModelMetrics
FROM aws.comprehend.flywheel_iterations
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
