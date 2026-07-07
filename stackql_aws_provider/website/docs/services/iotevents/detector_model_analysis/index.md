--- 
title: detector_model_analysis
hide_title: false
hide_table_of_contents: false
keywords:
  - detector_model_analysis
  - iotevents
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

Creates, updates, deletes, gets or lists a <code>detector_model_analysis</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="detector_model_analysis" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.iotevents.detector_model_analysis" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_detector_model_analysis"
    values={[
        { label: 'describe_detector_model_analysis', value: 'describe_detector_model_analysis' }
    ]}
>
<TabItem value="describe_detector_model_analysis">

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
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the analysis activity. The status can be one of the following values: RUNNING - AWS IoT Events is analyzing your detector model. This process can take several minutes to complete. COMPLETE - AWS IoT Events finished analyzing your detector model. FAILED - AWS IoT Events couldn't analyze your detector model. Try again later. (RUNNING, COMPLETE, FAILED)</td>
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
    <td><a href="#describe_detector_model_analysis"><CopyableCode code="describe_detector_model_analysis" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-analysis_id"><code>analysis_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves runtime information about a detector model analysis. After AWS IoT Events starts analyzing your detector model, you have up to 24 hours to retrieve the analysis results.</td>
</tr>
<tr>
    <td><a href="#start_detector_model_analysis"><CopyableCode code="start_detector_model_analysis" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-detectorModelDefinition"><code>detectorModelDefinition</code></a></td>
    <td></td>
    <td>Performs an analysis of your detector model. For more information, see Troubleshooting a detector model in the AWS IoT Events Developer Guide.</td>
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
<tr id="parameter-analysis_id">
    <td><CopyableCode code="analysis_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the analysis result that you want to retrieve.</td>
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
    defaultValue="describe_detector_model_analysis"
    values={[
        { label: 'describe_detector_model_analysis', value: 'describe_detector_model_analysis' }
    ]}
>
<TabItem value="describe_detector_model_analysis">

Retrieves runtime information about a detector model analysis. After AWS IoT Events starts analyzing your detector model, you have up to 24 hours to retrieve the analysis results.

```sql
SELECT
status
FROM aws.iotevents.detector_model_analysis
WHERE analysis_id = '{{ analysis_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="start_detector_model_analysis"
    values={[
        { label: 'start_detector_model_analysis', value: 'start_detector_model_analysis' }
    ]}
>
<TabItem value="start_detector_model_analysis">

Performs an analysis of your detector model. For more information, see Troubleshooting a detector model in the AWS IoT Events Developer Guide.

```sql
EXEC aws.iotevents.detector_model_analysis.start_detector_model_analysis 
@region='{{ region }}' --required 
@@json=
'{
"detectorModelDefinition": "{{ detectorModelDefinition }}"
}'
;
```
</TabItem>
</Tabs>
