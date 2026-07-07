--- 
title: invalidations
hide_title: false
hide_table_of_contents: false
keywords:
  - invalidations
  - cloudfront
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

Creates, updates, deletes, gets or lists an <code>invalidations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="invalidations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.cloudfront.invalidations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_invalidation"
    values={[
        { label: 'get_invalidation', value: 'get_invalidation' },
        { label: 'list_invalidations', value: 'list_invalidations' }
    ]}
>
<TabItem value="get_invalidation">

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
    <td><CopyableCode code="CreateTime" /></td>
    <td><code>string</code></td>
    <td>The date and time the invalidation request was first made.</td>
</tr>
<tr>
    <td><CopyableCode code="Id" /></td>
    <td><code>string</code></td>
    <td>The identifier for the invalidation request. For example: IDFDVBD632BHDS5.</td>
</tr>
<tr>
    <td><CopyableCode code="InvalidationBatch" /></td>
    <td><code>string</code></td>
    <td>The current invalidation information for the batch request.</td>
</tr>
<tr>
    <td><CopyableCode code="Status" /></td>
    <td><code>string</code></td>
    <td>The status of the invalidation request. When the invalidation batch is finished, the status is Completed.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_invalidations">

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
    <td><CopyableCode code="IsTruncated" /></td>
    <td><code>boolean</code></td>
    <td>A flag that indicates whether more invalidation batch requests remain to be listed. If your results were truncated, you can make a follow-up pagination request using the Marker request parameter to retrieve more invalidation batches in the list.</td>
</tr>
<tr>
    <td><CopyableCode code="Items" /></td>
    <td><code>string</code></td>
    <td>A complex type that contains one InvalidationSummary element for each invalidation batch created by the current Amazon Web Services account.</td>
</tr>
<tr>
    <td><CopyableCode code="Marker" /></td>
    <td><code>string</code></td>
    <td>The value that you provided for the Marker request parameter.</td>
</tr>
<tr>
    <td><CopyableCode code="MaxItems" /></td>
    <td><code>integer</code></td>
    <td>The value that you provided for the MaxItems request parameter.</td>
</tr>
<tr>
    <td><CopyableCode code="NextMarker" /></td>
    <td><code>string</code></td>
    <td>If IsTruncated is true, this element is present and contains the value that you can use for the Marker request parameter to continue listing your invalidation batches where they left off.</td>
</tr>
<tr>
    <td><CopyableCode code="Quantity" /></td>
    <td><code>integer</code></td>
    <td>The number of invalidation batches that were created by the current Amazon Web Services account.</td>
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
    <td><a href="#get_invalidation"><CopyableCode code="get_invalidation" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-distribution_id"><code>distribution_id</code></a>, <a href="#parameter-id"><code>id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Get the information about an invalidation.</td>
</tr>
<tr>
    <td><a href="#list_invalidations"><CopyableCode code="list_invalidations" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-distribution_id"><code>distribution_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-Marker"><code>Marker</code></a>, <a href="#parameter-MaxItems"><code>MaxItems</code></a></td>
    <td>Lists invalidation batches.</td>
</tr>
<tr>
    <td><a href="#create_invalidation"><CopyableCode code="create_invalidation" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-distribution_id"><code>distribution_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-InvalidationBatch"><code>InvalidationBatch</code></a></td>
    <td></td>
    <td>Create a new invalidation. For more information, see Invalidating files in the Amazon CloudFront Developer Guide.</td>
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
<tr id="parameter-distribution_id">
    <td><CopyableCode code="distribution_id" /></td>
    <td><code>string</code></td>
    <td>The distribution's id.</td>
</tr>
<tr id="parameter-id">
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The identifier for the invalidation request, for example, IDFDVBD632BHDS5.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-Marker">
    <td><CopyableCode code="Marker" /></td>
    <td><code>string</code></td>
    <td>Use this parameter when paginating results to indicate where to begin in your list of invalidation batches. Because the results are returned in decreasing order from most recent to oldest, the most recent results are on the first page, the second page will contain earlier results, and so on. To get the next page of results, set Marker to the value of the NextMarker from the current page's response. This value is the same as the ID of the last invalidation batch on that page.</td>
</tr>
<tr id="parameter-MaxItems">
    <td><CopyableCode code="MaxItems" /></td>
    <td><code>string</code></td>
    <td>The maximum number of invalidation batches that you want in the response body.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_invalidation"
    values={[
        { label: 'get_invalidation', value: 'get_invalidation' },
        { label: 'list_invalidations', value: 'list_invalidations' }
    ]}
>
<TabItem value="get_invalidation">

Get the information about an invalidation.

```sql
SELECT
CreateTime,
Id,
InvalidationBatch,
Status
FROM aws.cloudfront.invalidations
WHERE distribution_id = '{{ distribution_id }}' -- required
AND id = '{{ id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_invalidations">

Lists invalidation batches.

```sql
SELECT
IsTruncated,
Items,
Marker,
MaxItems,
NextMarker,
Quantity
FROM aws.cloudfront.invalidations
WHERE distribution_id = '{{ distribution_id }}' -- required
AND region = '{{ region }}' -- required
AND Marker = '{{ Marker }}'
AND MaxItems = '{{ MaxItems }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_invalidation"
    values={[
        { label: 'create_invalidation', value: 'create_invalidation' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_invalidation">

Create a new invalidation. For more information, see Invalidating files in the Amazon CloudFront Developer Guide.

```sql
INSERT INTO aws.cloudfront.invalidations (
InvalidationBatch,
distribution_id,
region
)
SELECT 
'{{ InvalidationBatch }}' /* required */,
'{{ distribution_id }}',
'{{ region }}'
RETURNING
CreateTime,
Id,
InvalidationBatch,
Status
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: invalidations
  props:
    - name: distribution_id
      value: "{{ distribution_id }}"
      description: Required parameter for the invalidations resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the invalidations resource.
    - name: InvalidationBatch
      description: |
        An invalidation batch.
      value:
        Paths:
          Quantity: {{ Quantity }}
          Items:
            - "{{ Items }}"
        CallerReference: "{{ CallerReference }}"
`}</CodeBlock>

</TabItem>
</Tabs>
