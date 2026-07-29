--- 
title: publishing_destinations
hide_title: false
hide_table_of_contents: false
keywords:
  - publishing_destinations
  - guardduty
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

Creates, updates, deletes, gets or lists a <code>publishing_destinations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="publishing_destinations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.guardduty.publishing_destinations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_publishing_destination"
    values={[
        { label: 'describe_publishing_destination', value: 'describe_publishing_destination' },
        { label: 'list_publishing_destinations', value: 'list_publishing_destinations' }
    ]}
>
<TabItem value="describe_publishing_destination">

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
    <td><CopyableCode code="destination_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the publishing destination.</td>
</tr>
<tr>
    <td><CopyableCode code="destination_properties" /></td>
    <td><code>object</code></td>
    <td>Contains the Amazon Resource Name (ARN) of the resource to publish to, such as an S3 bucket, and the ARN of the KMS key to use to encrypt published findings.</td>
</tr>
<tr>
    <td><CopyableCode code="destination_type" /></td>
    <td><code>string</code></td>
    <td>The type of publishing destination. Currently, only Amazon S3 buckets are supported. (S3)</td>
</tr>
<tr>
    <td><CopyableCode code="publishing_failure_start_timestamp" /></td>
    <td><code>integer (int64)</code></td>
    <td>The time, in epoch millisecond format, at which GuardDuty was first unable to publish findings to the destination.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the publishing destination. (PENDING_VERIFICATION, PUBLISHING, UNABLE_TO_PUBLISH_FIX_DESTINATION_PROPERTY, STOPPED)</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>The tags of the publishing destination resource.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_publishing_destinations">

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
    <td><CopyableCode code="destinations" /></td>
    <td><code>array</code></td>
    <td>A Destinations object that includes information about each publishing destination returned.</td>
</tr>
<tr>
    <td><CopyableCode code="next_token" /></td>
    <td><code>string</code></td>
    <td>A token to use for paginating results that are returned in the response. Set the value of this parameter to null for the first request to a list action. For subsequent calls, use the NextToken value returned from the previous request to continue listing results after the first page.</td>
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
    <td><a href="#describe_publishing_destination"><CopyableCode code="describe_publishing_destination" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-detector_id"><code>detector_id</code></a>, <a href="#parameter-destination_id"><code>destination_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns information about the publishing destination specified by the provided destinationId.</td>
</tr>
<tr>
    <td><a href="#list_publishing_destinations"><CopyableCode code="list_publishing_destinations" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-detector_id"><code>detector_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a></td>
    <td>Returns a list of publishing destinations associated with the specified detectorId.</td>
</tr>
<tr>
    <td><a href="#create_publishing_destination"><CopyableCode code="create_publishing_destination" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-detector_id"><code>detector_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-DestinationType"><code>DestinationType</code></a>, <a href="#parameter-DestinationProperties"><code>DestinationProperties</code></a></td>
    <td></td>
    <td>Creates a publishing destination where you can export your GuardDuty findings. Before you start exporting the findings, the destination resource must exist.</td>
</tr>
<tr>
    <td><a href="#update_publishing_destination"><CopyableCode code="update_publishing_destination" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-detector_id"><code>detector_id</code></a>, <a href="#parameter-destination_id"><code>destination_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates information about the publishing destination specified by the destinationId.</td>
</tr>
<tr>
    <td><a href="#delete_publishing_destination"><CopyableCode code="delete_publishing_destination" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-detector_id"><code>detector_id</code></a>, <a href="#parameter-destination_id"><code>destination_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the publishing definition with the specified destinationId.</td>
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
<tr id="parameter-destination_id">
    <td><CopyableCode code="destination_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the publishing destination to delete.</td>
</tr>
<tr id="parameter-detector_id">
    <td><CopyableCode code="detector_id" /></td>
    <td><code>string</code></td>
    <td>The unique ID of the detector associated with the publishing destination to delete. To find the detectorId in the current Region, see the Settings page in the GuardDuty console, or run the ListDetectors API.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return in the response.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>A token to use for paginating results that are returned in the response. Set the value of this parameter to null for the first request to a list action. For subsequent calls, use the NextToken value returned from the previous request to continue listing results after the first page.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_publishing_destination"
    values={[
        { label: 'describe_publishing_destination', value: 'describe_publishing_destination' },
        { label: 'list_publishing_destinations', value: 'list_publishing_destinations' }
    ]}
>
<TabItem value="describe_publishing_destination">

Returns information about the publishing destination specified by the provided destinationId.

```sql
SELECT
destination_id,
destination_properties,
destination_type,
publishing_failure_start_timestamp,
status,
tags
FROM aws.guardduty.publishing_destinations
WHERE detector_id = '{{ detector_id }}' -- required
AND destination_id = '{{ destination_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_publishing_destinations">

Returns a list of publishing destinations associated with the specified detectorId.

```sql
SELECT
destinations,
next_token
FROM aws.guardduty.publishing_destinations
WHERE detector_id = '{{ detector_id }}' -- required
AND region = '{{ region }}' -- required
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_publishing_destination"
    values={[
        { label: 'create_publishing_destination', value: 'create_publishing_destination' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_publishing_destination">

Creates a publishing destination where you can export your GuardDuty findings. Before you start exporting the findings, the destination resource must exist.

```sql
INSERT INTO aws.guardduty.publishing_destinations (
DestinationType,
DestinationProperties,
ClientToken,
Tags,
detector_id,
region
)
SELECT 
'{{ DestinationType }}' /* required */,
'{{ DestinationProperties }}' /* required */,
'{{ ClientToken }}',
'{{ Tags }}',
'{{ detector_id }}',
'{{ region }}'
RETURNING
destination_id
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: publishing_destinations
  props:
    - name: detector_id
      value: "{{ detector_id }}"
      description: Required parameter for the publishing_destinations resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the publishing_destinations resource.
    - name: DestinationType
      value: "{{ DestinationType }}"
      valid_values: ['S3']
    - name: DestinationProperties
      description: |
        Contains the Amazon Resource Name (ARN) of the resource to publish to, such as an S3 bucket, and the ARN of the KMS key to use to encrypt published findings.
      value:
        DestinationArn: "{{ DestinationArn }}"
        KmsKeyArn: "{{ KmsKeyArn }}"
    - name: ClientToken
      value: "{{ ClientToken }}"
    - name: Tags
      value: "{{ Tags }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_publishing_destination"
    values={[
        { label: 'update_publishing_destination', value: 'update_publishing_destination' }
    ]}
>
<TabItem value="update_publishing_destination">

Updates information about the publishing destination specified by the destinationId.

```sql
UPDATE aws.guardduty.publishing_destinations
SET 
DestinationProperties = '{{ DestinationProperties }}'
WHERE 
detector_id = '{{ detector_id }}' --required
AND destination_id = '{{ destination_id }}' --required
AND region = '{{ region }}' --required;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_publishing_destination"
    values={[
        { label: 'delete_publishing_destination', value: 'delete_publishing_destination' }
    ]}
>
<TabItem value="delete_publishing_destination">

Deletes the publishing definition with the specified destinationId.

```sql
DELETE FROM aws.guardduty.publishing_destinations
WHERE detector_id = '{{ detector_id }}' --required
AND destination_id = '{{ destination_id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
