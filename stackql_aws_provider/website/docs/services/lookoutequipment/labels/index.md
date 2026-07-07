--- 
title: labels
hide_title: false
hide_table_of_contents: false
keywords:
  - labels
  - lookoutequipment
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

Creates, updates, deletes, gets or lists a <code>labels</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="labels" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.lookoutequipment.labels" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_label"
    values={[
        { label: 'describe_label', value: 'describe_label' },
        { label: 'list_labels', value: 'list_labels' }
    ]}
>
<TabItem value="describe_label">

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
    <td><CopyableCode code="CreatedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time at which the label was created.</td>
</tr>
<tr>
    <td><CopyableCode code="EndTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The end time of the requested label.</td>
</tr>
<tr>
    <td><CopyableCode code="Equipment" /></td>
    <td><code>string</code></td>
    <td>Indicates that a label pertains to a particular piece of equipment. (pattern: &lt;code&gt;&#91;\P&#123;M&#125;\p&#123;M&#125;&#93;&#123;1,200&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="FaultCode" /></td>
    <td><code>string</code></td>
    <td>Indicates the type of anomaly associated with the label. Data in this field will be retained for service usage. Follow best practices for the security of your data. (pattern: &lt;code&gt;&#91;\P&#123;M&#125;\p&#123;M&#125;&#93;&#123;1,100&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="LabelGroupArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the requested label group. (pattern: &lt;code&gt;arn:aws(-&#91;^:&#93;+)?:lookoutequipment:&#91;a-zA-Z0-9\-&#93;*:&#91;0-9&#93;&#123;12&#125;:label-group\/.+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="LabelGroupName" /></td>
    <td><code>string</code></td>
    <td>The name of the requested label group. (pattern: &lt;code&gt;^&#91;0-9a-zA-Z_-&#93;&#123;1,200&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="LabelId" /></td>
    <td><code>string</code></td>
    <td>The ID of the requested label. (pattern: &lt;code&gt;&#91;A-Fa-f0-9&#93;&#123;0,32&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="Notes" /></td>
    <td><code>string</code></td>
    <td>Metadata providing additional information about the label. Data in this field will be retained for service usage. Follow best practices for the security of your data. (pattern: &lt;code&gt;&#91;\P&#123;M&#125;\p&#123;M&#125;&#93;&#123;1,2560&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="Rating" /></td>
    <td><code>string</code></td>
    <td>Indicates whether a labeled event represents an anomaly. (ANOMALY, NO_ANOMALY, NEUTRAL)</td>
</tr>
<tr>
    <td><CopyableCode code="StartTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The start time of the requested label.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_labels">

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
    <td><CopyableCode code="LabelSummaries" /></td>
    <td><code>array</code></td>
    <td>A summary of the items in the label group. If you don't supply the LabelGroupName request parameter, or if you supply the name of a label group that doesn't exist, ListLabels returns an empty array in LabelSummaries.</td>
</tr>
<tr>
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>An opaque pagination token indicating where to continue the listing of datasets. (pattern: &lt;code&gt;\p&#123;ASCII&#125;&#123;0,8192&#125;&lt;/code&gt;)</td>
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
    <td><a href="#describe_label"><CopyableCode code="describe_label" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns the name of the label.</td>
</tr>
<tr>
    <td><a href="#list_labels"><CopyableCode code="list_labels" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Provides a list of labels.</td>
</tr>
<tr>
    <td><a href="#create_label"><CopyableCode code="create_label" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-LabelGroupName"><code>LabelGroupName</code></a>, <a href="#parameter-StartTime"><code>StartTime</code></a>, <a href="#parameter-EndTime"><code>EndTime</code></a>, <a href="#parameter-ClientToken"><code>ClientToken</code></a></td>
    <td></td>
    <td>Creates a label for an event.</td>
</tr>
<tr>
    <td><a href="#delete_label"><CopyableCode code="delete_label" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a label.</td>
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
    defaultValue="describe_label"
    values={[
        { label: 'describe_label', value: 'describe_label' },
        { label: 'list_labels', value: 'list_labels' }
    ]}
>
<TabItem value="describe_label">

Returns the name of the label.

```sql
SELECT
CreatedAt,
EndTime,
Equipment,
FaultCode,
LabelGroupArn,
LabelGroupName,
LabelId,
Notes,
Rating,
StartTime
FROM aws.lookoutequipment.labels
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_labels">

Provides a list of labels.

```sql
SELECT
LabelSummaries,
NextToken
FROM aws.lookoutequipment.labels
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_label"
    values={[
        { label: 'create_label', value: 'create_label' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_label">

Creates a label for an event.

```sql
INSERT INTO aws.lookoutequipment.labels (
LabelGroupName,
StartTime,
EndTime,
Rating,
FaultCode,
Notes,
Equipment,
ClientToken,
region
)
SELECT 
'{{ LabelGroupName }}' /* required */,
'{{ StartTime }}' /* required */,
'{{ EndTime }}' /* required */,
'{{ Rating }}',
'{{ FaultCode }}',
'{{ Notes }}',
'{{ Equipment }}',
'{{ ClientToken }}' /* required */,
'{{ region }}'
RETURNING
LabelId
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: labels
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the labels resource.
    - name: LabelGroupName
      value: "{{ LabelGroupName }}"
      description: |
        The name of a group of labels. Data in this field will be retained for service usage. Follow best practices for the security of your data.
    - name: StartTime
      value: "{{ StartTime }}"
      description: |
        The start time of the labeled event.
    - name: EndTime
      value: "{{ EndTime }}"
      description: |
        The end time of the labeled event.
    - name: Rating
      value: "{{ Rating }}"
      description: |
        Indicates whether a labeled event represents an anomaly.
      valid_values: ['ANOMALY', 'NO_ANOMALY', 'NEUTRAL']
    - name: FaultCode
      value: "{{ FaultCode }}"
      description: |
        Provides additional information about the label. The fault code must be defined in the FaultCodes attribute of the label group. Data in this field will be retained for service usage. Follow best practices for the security of your data.
    - name: Notes
      value: "{{ Notes }}"
      description: |
        Metadata providing additional information about the label. Data in this field will be retained for service usage. Follow best practices for the security of your data.
    - name: Equipment
      value: "{{ Equipment }}"
      description: |
        Indicates that a label pertains to a particular piece of equipment. Data in this field will be retained for service usage. Follow best practices for the security of your data.
    - name: ClientToken
      value: "{{ ClientToken }}"
      description: |
        A unique identifier for the request to create a label. If you do not set the client request token, Lookout for Equipment generates one.
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_label"
    values={[
        { label: 'delete_label', value: 'delete_label' }
    ]}
>
<TabItem value="delete_label">

Deletes a label.

```sql
DELETE FROM aws.lookoutequipment.labels
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
