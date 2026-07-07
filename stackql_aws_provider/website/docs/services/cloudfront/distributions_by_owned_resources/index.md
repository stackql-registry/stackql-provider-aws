--- 
title: distributions_by_owned_resources
hide_title: false
hide_table_of_contents: false
keywords:
  - distributions_by_owned_resources
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

Creates, updates, deletes, gets or lists a <code>distributions_by_owned_resources</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="distributions_by_owned_resources" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.cloudfront.distributions_by_owned_resources" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_distributions_by_owned_resource"
    values={[
        { label: 'list_distributions_by_owned_resource', value: 'list_distributions_by_owned_resource' }
    ]}
>
<TabItem value="list_distributions_by_owned_resource">

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
    <td>A flag that indicates whether more DistributionIdOwner objects remain to be listed. If your results were truncated, you can make a follow-up pagination request using the Marker request parameter to retrieve more results in the list.</td>
</tr>
<tr>
    <td><CopyableCode code="Items" /></td>
    <td><code>string</code></td>
    <td>The number of DistributionIdOwner objects.</td>
</tr>
<tr>
    <td><CopyableCode code="Marker" /></td>
    <td><code>string</code></td>
    <td>Use this field when paginating results to indicate where to begin in your list of DistributionIdOwner objects. The response includes distributions in the list that occur after the marker. To get the next page of the list, set this field's value to the value of NextMarker from the current page's response.</td>
</tr>
<tr>
    <td><CopyableCode code="MaxItems" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of DistributionIdOwner objects to return.</td>
</tr>
<tr>
    <td><CopyableCode code="NextMarker" /></td>
    <td><code>string</code></td>
    <td>A token used for pagination of results returned in the response. You can use the token from the previous request to define where the current request should begin.</td>
</tr>
<tr>
    <td><CopyableCode code="Quantity" /></td>
    <td><code>integer</code></td>
    <td>Specifies the actual number of DistributionIdOwner objects included in the list for the current page.</td>
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
    <td><a href="#list_distributions_by_owned_resource"><CopyableCode code="list_distributions_by_owned_resource" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-resource_arn"><code>resource_arn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-Marker"><code>Marker</code></a>, <a href="#parameter-MaxItems"><code>MaxItems</code></a></td>
    <td>Lists the CloudFront distributions that are associated with the specified resource that you own.</td>
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
<tr id="parameter-resource_arn">
    <td><CopyableCode code="resource_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the CloudFront resource that you've shared with other Amazon Web Services accounts.</td>
</tr>
<tr id="parameter-Marker">
    <td><CopyableCode code="Marker" /></td>
    <td><code>string</code></td>
    <td>Use this field when paginating results to indicate where to begin in your list of distributions. The response includes distributions in the list that occur after the marker. To get the next page of the list, set this field's value to the value of NextMarker from the current page's response.</td>
</tr>
<tr id="parameter-MaxItems">
    <td><CopyableCode code="MaxItems" /></td>
    <td><code>string</code></td>
    <td>The maximum number of distributions to return.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_distributions_by_owned_resource"
    values={[
        { label: 'list_distributions_by_owned_resource', value: 'list_distributions_by_owned_resource' }
    ]}
>
<TabItem value="list_distributions_by_owned_resource">

Lists the CloudFront distributions that are associated with the specified resource that you own.

```sql
SELECT
IsTruncated,
Items,
Marker,
MaxItems,
NextMarker,
Quantity
FROM aws.cloudfront.distributions_by_owned_resources
WHERE resource_arn = '{{ resource_arn }}' -- required
AND region = '{{ region }}' -- required
AND Marker = '{{ Marker }}'
AND MaxItems = '{{ MaxItems }}'
;
```
</TabItem>
</Tabs>
