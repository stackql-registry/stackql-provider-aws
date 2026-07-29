--- 
title: labels
hide_title: false
hide_table_of_contents: false
keywords:
  - labels
  - frauddetector
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
<tr><td><b>Id</b></td><td><CopyableCode code="aws.frauddetector.labels" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_labels"
    values={[
        { label: 'get_labels', value: 'get_labels' }
    ]}
>
<TabItem value="get_labels">

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
    <td><CopyableCode code="labels" /></td>
    <td><code>array</code></td>
    <td>An array of labels.</td>
</tr>
<tr>
    <td><CopyableCode code="next_token" /></td>
    <td><code>string</code></td>
    <td>The next page token.</td>
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
    <td><a href="#get_labels"><CopyableCode code="get_labels" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets all labels or a specific label if name is provided. This is a paginated API. If you provide a null maxResults, this action retrieves a maximum of 50 records per page. If you provide a maxResults, the value must be between 10 and 50. To get the next page results, provide the pagination token from the GetGetLabelsResponse as part of your request. A null pagination token fetches the records from the beginning.</td>
</tr>
<tr>
    <td><a href="#update_event_label"><CopyableCode code="update_event_label" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-eventId"><code>eventId</code></a>, <a href="#parameter-eventTypeName"><code>eventTypeName</code></a>, <a href="#parameter-assignedLabel"><code>assignedLabel</code></a>, <a href="#parameter-labelTimestamp"><code>labelTimestamp</code></a></td>
    <td></td>
    <td>Updates the specified event with a new label.</td>
</tr>
<tr>
    <td><a href="#put_label"><CopyableCode code="put_label" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-name"><code>name</code></a></td>
    <td></td>
    <td>Creates or updates label. A label classifies an event as fraudulent or legitimate. Labels are associated with event types and used to train supervised machine learning models in Amazon Fraud Detector.</td>
</tr>
<tr>
    <td><a href="#delete_label"><CopyableCode code="delete_label" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a label. You cannot delete labels that are included in an event type in Amazon Fraud Detector. You cannot delete a label assigned to an event ID. You must first delete the relevant event ID. When you delete a label, Amazon Fraud Detector permanently deletes that label and the data is no longer stored in Amazon Fraud Detector.</td>
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
    defaultValue="get_labels"
    values={[
        { label: 'get_labels', value: 'get_labels' }
    ]}
>
<TabItem value="get_labels">

Gets all labels or a specific label if name is provided. This is a paginated API. If you provide a null maxResults, this action retrieves a maximum of 50 records per page. If you provide a maxResults, the value must be between 10 and 50. To get the next page results, provide the pagination token from the GetGetLabelsResponse as part of your request. A null pagination token fetches the records from the beginning.

```sql
SELECT
labels,
next_token
FROM aws.frauddetector.labels
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_event_label"
    values={[
        { label: 'update_event_label', value: 'update_event_label' }
    ]}
>
<TabItem value="update_event_label">

Updates the specified event with a new label.

```sql
UPDATE aws.frauddetector.labels
SET 
eventId = '{{ eventId }}',
eventTypeName = '{{ eventTypeName }}',
assignedLabel = '{{ assignedLabel }}',
labelTimestamp = '{{ labelTimestamp }}'
WHERE 
region = '{{ region }}' --required
AND eventId = '{{ eventId }}' --required
AND eventTypeName = '{{ eventTypeName }}' --required
AND assignedLabel = '{{ assignedLabel }}' --required
AND labelTimestamp = '{{ labelTimestamp }}' --required;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="put_label"
    values={[
        { label: 'put_label', value: 'put_label' }
    ]}
>
<TabItem value="put_label">

Creates or updates label. A label classifies an event as fraudulent or legitimate. Labels are associated with event types and used to train supervised machine learning models in Amazon Fraud Detector.

```sql
REPLACE aws.frauddetector.labels
SET 
name = '{{ name }}',
description = '{{ description }}',
tags = '{{ tags }}'
WHERE 
region = '{{ region }}' --required
AND name = '{{ name }}' --required;
```
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

Deletes a label. You cannot delete labels that are included in an event type in Amazon Fraud Detector. You cannot delete a label assigned to an event ID. You must first delete the relevant event ID. When you delete a label, Amazon Fraud Detector permanently deletes that label and the data is no longer stored in Amazon Fraud Detector.

```sql
DELETE FROM aws.frauddetector.labels
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
