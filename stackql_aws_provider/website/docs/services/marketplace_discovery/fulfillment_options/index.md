--- 
title: fulfillment_options
hide_title: false
hide_table_of_contents: false
keywords:
  - fulfillment_options
  - marketplace_discovery
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

Creates, updates, deletes, gets or lists a <code>fulfillment_options</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="fulfillment_options" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.marketplace_discovery.fulfillment_options" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_fulfillment_options"
    values={[
        { label: 'list_fulfillment_options', value: 'list_fulfillment_options' }
    ]}
>
<TabItem value="list_fulfillment_options">

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
    <td><CopyableCode code="amazonMachineImageFulfillmentOption" /></td>
    <td><code>object</code></td>
    <td>An Amazon Machine Image (AMI) fulfillment option for EC2 deployment.</td>
</tr>
<tr>
    <td><CopyableCode code="apiFulfillmentOption" /></td>
    <td><code>object</code></td>
    <td>An API-based fulfillment option for programmatic integration.</td>
</tr>
<tr>
    <td><CopyableCode code="cloudFormationFulfillmentOption" /></td>
    <td><code>object</code></td>
    <td>An AWS CloudFormation template fulfillment option for infrastructure deployment.</td>
</tr>
<tr>
    <td><CopyableCode code="containerFulfillmentOption" /></td>
    <td><code>object</code></td>
    <td>A container image fulfillment option for container-based deployment.</td>
</tr>
<tr>
    <td><CopyableCode code="dataExchangeFulfillmentOption" /></td>
    <td><code>object</code></td>
    <td>An AWS Data Exchange fulfillment option for data set delivery.</td>
</tr>
<tr>
    <td><CopyableCode code="ec2ImageBuilderComponentFulfillmentOption" /></td>
    <td><code>object</code></td>
    <td>An EC2 Image Builder component fulfillment option.</td>
</tr>
<tr>
    <td><CopyableCode code="eksAddOnFulfillmentOption" /></td>
    <td><code>object</code></td>
    <td>An Amazon EKS add-on fulfillment option.</td>
</tr>
<tr>
    <td><CopyableCode code="helmFulfillmentOption" /></td>
    <td><code>object</code></td>
    <td>A Helm chart fulfillment option for Kubernetes deployment.</td>
</tr>
<tr>
    <td><CopyableCode code="professionalServicesFulfillmentOption" /></td>
    <td><code>object</code></td>
    <td>A professional services fulfillment option.</td>
</tr>
<tr>
    <td><CopyableCode code="saasFulfillmentOption" /></td>
    <td><code>object</code></td>
    <td>A Software as a Service (SaaS) fulfillment option.</td>
</tr>
<tr>
    <td><CopyableCode code="sageMakerAlgorithmFulfillmentOption" /></td>
    <td><code>object</code></td>
    <td>An Amazon SageMaker algorithm fulfillment option.</td>
</tr>
<tr>
    <td><CopyableCode code="sageMakerModelFulfillmentOption" /></td>
    <td><code>object</code></td>
    <td>An Amazon SageMaker model fulfillment option.</td>
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
    <td><a href="#list_fulfillment_options"><CopyableCode code="list_fulfillment_options" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns the fulfillment options available for a product, including deployment details such as version information, operating systems, usage instructions, and release notes.</td>
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
    defaultValue="list_fulfillment_options"
    values={[
        { label: 'list_fulfillment_options', value: 'list_fulfillment_options' }
    ]}
>
<TabItem value="list_fulfillment_options">

Returns the fulfillment options available for a product, including deployment details such as version information, operating systems, usage instructions, and release notes.

```sql
SELECT
amazonMachineImageFulfillmentOption,
apiFulfillmentOption,
cloudFormationFulfillmentOption,
containerFulfillmentOption,
dataExchangeFulfillmentOption,
ec2ImageBuilderComponentFulfillmentOption,
eksAddOnFulfillmentOption,
helmFulfillmentOption,
professionalServicesFulfillmentOption,
saasFulfillmentOption,
sageMakerAlgorithmFulfillmentOption,
sageMakerModelFulfillmentOption
FROM aws.marketplace_discovery.fulfillment_options
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
