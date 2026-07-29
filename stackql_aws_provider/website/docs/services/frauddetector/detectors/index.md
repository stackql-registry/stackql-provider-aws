--- 
title: detectors
hide_title: false
hide_table_of_contents: false
keywords:
  - detectors
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

Creates, updates, deletes, gets or lists a <code>detectors</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="detectors" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.frauddetector.detectors" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_detector"
    values={[
        { label: 'describe_detector', value: 'describe_detector' },
        { label: 'get_detectors', value: 'get_detectors' }
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
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The detector ARN. (pattern: &lt;code&gt;^arn\:aws&#91;a-z-&#93;&#123;0,15&#125;\:frauddetector\:&#91;a-z0-9-&#93;&#123;3,20&#125;\:&#91;0-9&#93;&#123;12&#125;\:&#91;^\s&#93;&#123;2,128&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="detector_id" /></td>
    <td><code>string</code></td>
    <td>The detector ID. (pattern: &lt;code&gt;^&#91;0-9a-z_-&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="detector_version_summaries" /></td>
    <td><code>array</code></td>
    <td>The status and description for each detector version.</td>
</tr>
<tr>
    <td><CopyableCode code="next_token" /></td>
    <td><code>string</code></td>
    <td>The next token to be used for subsequent requests.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="get_detectors">

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
    <td><CopyableCode code="detectors" /></td>
    <td><code>array</code></td>
    <td>The detectors.</td>
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
    <td><a href="#describe_detector"><CopyableCode code="describe_detector" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets all versions for a specified detector.</td>
</tr>
<tr>
    <td><a href="#get_detectors"><CopyableCode code="get_detectors" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets all detectors or a single detector if a detectorId is specified. This is a paginated API. If you provide a null maxResults, this action retrieves a maximum of 10 records per page. If you provide a maxResults, the value must be between 5 and 10. To get the next page results, provide the pagination token from the GetDetectorsResponse as part of your request. A null pagination token fetches the records from the beginning.</td>
</tr>
<tr>
    <td><a href="#put_detector"><CopyableCode code="put_detector" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-detectorId"><code>detectorId</code></a>, <a href="#parameter-eventTypeName"><code>eventTypeName</code></a></td>
    <td></td>
    <td>Creates or updates a detector.</td>
</tr>
<tr>
    <td><a href="#delete_detector"><CopyableCode code="delete_detector" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the detector. Before deleting a detector, you must first delete all detector versions and rule versions associated with the detector. When you delete a detector, Amazon Fraud Detector permanently deletes the detector and the data is no longer stored in Amazon Fraud Detector.</td>
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
    defaultValue="describe_detector"
    values={[
        { label: 'describe_detector', value: 'describe_detector' },
        { label: 'get_detectors', value: 'get_detectors' }
    ]}
>
<TabItem value="describe_detector">

Gets all versions for a specified detector.

```sql
SELECT
arn,
detector_id,
detector_version_summaries,
next_token
FROM aws.frauddetector.detectors
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="get_detectors">

Gets all detectors or a single detector if a detectorId is specified. This is a paginated API. If you provide a null maxResults, this action retrieves a maximum of 10 records per page. If you provide a maxResults, the value must be between 5 and 10. To get the next page results, provide the pagination token from the GetDetectorsResponse as part of your request. A null pagination token fetches the records from the beginning.

```sql
SELECT
detectors,
next_token
FROM aws.frauddetector.detectors
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="put_detector"
    values={[
        { label: 'put_detector', value: 'put_detector' }
    ]}
>
<TabItem value="put_detector">

Creates or updates a detector.

```sql
REPLACE aws.frauddetector.detectors
SET 
detectorId = '{{ detectorId }}',
description = '{{ description }}',
eventTypeName = '{{ eventTypeName }}',
tags = '{{ tags }}'
WHERE 
region = '{{ region }}' --required
AND detectorId = '{{ detectorId }}' --required
AND eventTypeName = '{{ eventTypeName }}' --required;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_detector"
    values={[
        { label: 'delete_detector', value: 'delete_detector' }
    ]}
>
<TabItem value="delete_detector">

Deletes the detector. Before deleting a detector, you must first delete all detector versions and rule versions associated with the detector. When you delete a detector, Amazon Fraud Detector permanently deletes the detector and the data is no longer stored in Amazon Fraud Detector.

```sql
DELETE FROM aws.frauddetector.detectors
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
