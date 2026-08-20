--- 
title: finding_aggregations
hide_title: false
hide_table_of_contents: false
keywords:
  - finding_aggregations
  - inspector2
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

Creates, updates, deletes, gets or lists a <code>finding_aggregations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="finding_aggregations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.inspector2.finding_aggregations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_finding_aggregations"
    values={[
        { label: 'list_finding_aggregations', value: 'list_finding_aggregations' }
    ]}
>
<TabItem value="list_finding_aggregations">

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
    <td><CopyableCode code="account_aggregation" /></td>
    <td><code>object</code></td>
    <td>An object that contains details about an aggregation response based on Amazon Web Services account IDs.</td>
</tr>
<tr>
    <td><CopyableCode code="ami_aggregation" /></td>
    <td><code>object</code></td>
    <td>An object that contains details about an aggregation response based on Amazon Machine Images (AMIs).</td>
</tr>
<tr>
    <td><CopyableCode code="aws_ecr_container_aggregation" /></td>
    <td><code>object</code></td>
    <td>An object that contains details about an aggregation response based on Amazon ECR container images.</td>
</tr>
<tr>
    <td><CopyableCode code="code_repository_aggregation" /></td>
    <td><code>object</code></td>
    <td>An object that contains details about an aggregation response based on code repositories.</td>
</tr>
<tr>
    <td><CopyableCode code="container_image_aggregation" /></td>
    <td><code>object</code></td>
    <td>An object that contains details about an aggregation response based on container images.</td>
</tr>
<tr>
    <td><CopyableCode code="ec_2_instance_aggregation" /></td>
    <td><code>object</code></td>
    <td>An object that contains details about an aggregation response based on Amazon EC2 instances.</td>
</tr>
<tr>
    <td><CopyableCode code="finding_type_aggregation" /></td>
    <td><code>object</code></td>
    <td>An object that contains details about an aggregation response based on finding types.</td>
</tr>
<tr>
    <td><CopyableCode code="image_layer_aggregation" /></td>
    <td><code>object</code></td>
    <td>An object that contains details about an aggregation response based on container image layers.</td>
</tr>
<tr>
    <td><CopyableCode code="lambda_function_aggregation" /></td>
    <td><code>object</code></td>
    <td>An aggregation of findings by Amazon Web Services Lambda function.</td>
</tr>
<tr>
    <td><CopyableCode code="lambda_layer_aggregation" /></td>
    <td><code>object</code></td>
    <td>An aggregation of findings by Amazon Web Services Lambda layer.</td>
</tr>
<tr>
    <td><CopyableCode code="package_aggregation" /></td>
    <td><code>object</code></td>
    <td>An object that contains details about an aggregation response based on operating system package type.</td>
</tr>
<tr>
    <td><CopyableCode code="repository_aggregation" /></td>
    <td><code>object</code></td>
    <td>An object that contains details about an aggregation response based on Amazon ECR repositories.</td>
</tr>
<tr>
    <td><CopyableCode code="serverless_function_aggregation" /></td>
    <td><code>object</code></td>
    <td>An object that contains details about an aggregation response based on serverless functions.</td>
</tr>
<tr>
    <td><CopyableCode code="title_aggregation" /></td>
    <td><code>object</code></td>
    <td>An object that contains details about an aggregation response based on finding title.</td>
</tr>
<tr>
    <td><CopyableCode code="vm_instance_aggregation" /></td>
    <td><code>object</code></td>
    <td>An object that contains details about an aggregation response based on VM instances.</td>
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
    <td><a href="#list_finding_aggregations"><CopyableCode code="list_finding_aggregations" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists aggregated finding data for your environment based on specific criteria.</td>
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
    defaultValue="list_finding_aggregations"
    values={[
        { label: 'list_finding_aggregations', value: 'list_finding_aggregations' }
    ]}
>
<TabItem value="list_finding_aggregations">

Lists aggregated finding data for your environment based on specific criteria.

```sql
SELECT
account_aggregation,
ami_aggregation,
aws_ecr_container_aggregation,
code_repository_aggregation,
container_image_aggregation,
ec_2_instance_aggregation,
finding_type_aggregation,
image_layer_aggregation,
lambda_function_aggregation,
lambda_layer_aggregation,
package_aggregation,
repository_aggregation,
serverless_function_aggregation,
title_aggregation,
vm_instance_aggregation
FROM aws.inspector2.finding_aggregations
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
