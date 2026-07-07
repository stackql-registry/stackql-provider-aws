--- 
title: detectors
hide_title: false
hide_table_of_contents: false
keywords:
  - detectors
  - iotevents_data
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

Creates, updates, deletes, gets or lists a <code>detectors</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="detectors" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.iotevents_data.detectors" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_detector"
    values={[
        { label: 'describe_detector', value: 'describe_detector' }
    ]}
>
<TabItem value="describe_detector">

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
    <td><CopyableCode code="creationTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time the detector (instance) was created.</td>
</tr>
<tr>
    <td><CopyableCode code="detectorModelName" /></td>
    <td><code>string</code></td>
    <td>The name of the detector model that created this detector (instance). (pattern: &lt;code&gt;^&#91;a-zA-Z0-9_-&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="detectorModelVersion" /></td>
    <td><code>string</code></td>
    <td>The version of the detector model that created this detector (instance).</td>
</tr>
<tr>
    <td><CopyableCode code="keyValue" /></td>
    <td><code>string</code></td>
    <td>The value of the key (identifying the device or system) that caused the creation of this detector (instance). (pattern: &lt;code&gt;^&#91;a-zA-Z0-9\-_:&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="lastUpdateTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time the detector (instance) was last updated.</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>object</code></td>
    <td>The current state of the detector (instance).</td>
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
    <td><a href="#describe_detector"><CopyableCode code="describe_detector" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-detector_model_name"><code>detector_model_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-keyValue"><code>keyValue</code></a></td>
    <td>Returns information about the specified detector (instance).</td>
</tr>
<tr>
    <td><a href="#list_detectors"><CopyableCode code="list_detectors" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-detector_model_name"><code>detector_model_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-stateName"><code>stateName</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a></td>
    <td>Lists detectors (the instances of a detector model).</td>
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
<tr id="parameter-detector_model_name">
    <td><CopyableCode code="detector_model_name" /></td>
    <td><code>string</code></td>
    <td>The name of the detector model whose detectors (instances) are listed.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-keyValue">
    <td><CopyableCode code="keyValue" /></td>
    <td><code>string</code></td>
    <td>A filter used to limit results to detectors (instances) created because of the given key ID.</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to be returned per request.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The token that you can use to return the next set of results.</td>
</tr>
<tr id="parameter-stateName">
    <td><CopyableCode code="stateName" /></td>
    <td><code>string</code></td>
    <td>A filter that limits results to those detectors (instances) in the given state.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_detector"
    values={[
        { label: 'describe_detector', value: 'describe_detector' }
    ]}
>
<TabItem value="describe_detector">

Returns information about the specified detector (instance).

```sql
SELECT
creationTime,
detectorModelName,
detectorModelVersion,
keyValue,
lastUpdateTime,
state
FROM aws.iotevents_data.detectors
WHERE detector_model_name = '{{ detector_model_name }}' -- required
AND region = '{{ region }}' -- required
AND keyValue = '{{ keyValue }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="list_detectors"
    values={[
        { label: 'list_detectors', value: 'list_detectors' }
    ]}
>
<TabItem value="list_detectors">

Lists detectors (the instances of a detector model).

```sql
EXEC aws.iotevents_data.detectors.list_detectors 
@detector_model_name='{{ detector_model_name }}' --required, 
@region='{{ region }}' --required, 
@stateName='{{ stateName }}', 
@nextToken='{{ nextToken }}', 
@maxResults='{{ maxResults }}'
;
```
</TabItem>
</Tabs>
