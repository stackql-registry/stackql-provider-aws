--- 
title: ec2_instance_recommendations
hide_title: false
hide_table_of_contents: false
keywords:
  - ec2_instance_recommendations
  - compute_optimizer
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

Creates, updates, deletes, gets or lists an <code>ec2_instance_recommendations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="ec2_instance_recommendations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.compute_optimizer.ec2_instance_recommendations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_ec2_instance_recommendations"
    values={[
        { label: 'get_ec2_instance_recommendations', value: 'get_ec2_instance_recommendations' }
    ]}
>
<TabItem value="get_ec2_instance_recommendations">

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
    <td><CopyableCode code="errors" /></td>
    <td><code>array</code></td>
    <td>An array of objects that describe errors of the request. For example, an error is returned if you request recommendations for an instance of an unsupported instance family.</td>
</tr>
<tr>
    <td><CopyableCode code="instanceRecommendations" /></td>
    <td><code>array</code></td>
    <td>An array of objects that describe instance recommendations.</td>
</tr>
<tr>
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The token to use to advance to the next page of instance recommendations. This value is null when there are no more pages of instance recommendations to return.</td>
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
    <td><a href="#get_ec2_instance_recommendations"><CopyableCode code="get_ec2_instance_recommendations" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns Amazon EC2 instance recommendations. Compute Optimizer generates recommendations for Amazon Elastic Compute Cloud (Amazon EC2) instances that meet a specific set of requirements. For more information, see the Supported resources and requirements in the Compute Optimizer User Guide.</td>
</tr>
<tr>
    <td><a href="#export_ec2_instance_recommendations"><CopyableCode code="export_ec2_instance_recommendations" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-s3DestinationConfig"><code>s3DestinationConfig</code></a></td>
    <td></td>
    <td>Exports optimization recommendations for Amazon EC2 instances. Recommendations are exported in a comma-separated values (.csv) file, and its metadata in a JavaScript Object Notation (JSON) (.json) file, to an existing Amazon Simple Storage Service (Amazon S3) bucket that you specify. For more information, see Exporting Recommendations in the Compute Optimizer User Guide. You can have only one Amazon EC2 instance export job in progress per Amazon Web Services Region.</td>
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
    defaultValue="get_ec2_instance_recommendations"
    values={[
        { label: 'get_ec2_instance_recommendations', value: 'get_ec2_instance_recommendations' }
    ]}
>
<TabItem value="get_ec2_instance_recommendations">

Returns Amazon EC2 instance recommendations. Compute Optimizer generates recommendations for Amazon Elastic Compute Cloud (Amazon EC2) instances that meet a specific set of requirements. For more information, see the Supported resources and requirements in the Compute Optimizer User Guide.

```sql
SELECT
errors,
instanceRecommendations,
nextToken
FROM aws.compute_optimizer.ec2_instance_recommendations
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="export_ec2_instance_recommendations"
    values={[
        { label: 'export_ec2_instance_recommendations', value: 'export_ec2_instance_recommendations' }
    ]}
>
<TabItem value="export_ec2_instance_recommendations">

Exports optimization recommendations for Amazon EC2 instances. Recommendations are exported in a comma-separated values (.csv) file, and its metadata in a JavaScript Object Notation (JSON) (.json) file, to an existing Amazon Simple Storage Service (Amazon S3) bucket that you specify. For more information, see Exporting Recommendations in the Compute Optimizer User Guide. You can have only one Amazon EC2 instance export job in progress per Amazon Web Services Region.

```sql
EXEC aws.compute_optimizer.ec2_instance_recommendations.export_ec2_instance_recommendations 
@region='{{ region }}' --required 
@@json=
'{
"accountIds": "{{ accountIds }}", 
"filters": "{{ filters }}", 
"fieldsToExport": "{{ fieldsToExport }}", 
"s3DestinationConfig": "{{ s3DestinationConfig }}", 
"fileFormat": "{{ fileFormat }}", 
"includeMemberAccounts": {{ includeMemberAccounts }}, 
"recommendationPreferences": "{{ recommendationPreferences }}"
}'
;
```
</TabItem>
</Tabs>
