--- 
title: provisioning_parameters
hide_title: false
hide_table_of_contents: false
keywords:
  - provisioning_parameters
  - servicecatalog
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

Creates, updates, deletes, gets or lists a <code>provisioning_parameters</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="provisioning_parameters" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.servicecatalog.provisioning_parameters" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_provisioning_parameters"
    values={[
        { label: 'describe_provisioning_parameters', value: 'describe_provisioning_parameters' }
    ]}
>
<TabItem value="describe_provisioning_parameters">

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
    <td><CopyableCode code="constraint_summaries" /></td>
    <td><code>array</code></td>
    <td>Information about the constraints used to provision the product.</td>
</tr>
<tr>
    <td><CopyableCode code="provisioning_artifact_output_keys" /></td>
    <td><code>array</code></td>
    <td>A list of the keys and descriptions of the outputs. These outputs can be referenced from a provisioned product launched from this provisioning artifact.</td>
</tr>
<tr>
    <td><CopyableCode code="provisioning_artifact_outputs" /></td>
    <td><code>array</code></td>
    <td>The output of the provisioning artifact.</td>
</tr>
<tr>
    <td><CopyableCode code="provisioning_artifact_parameters" /></td>
    <td><code>array</code></td>
    <td>Information about the parameters used to provision the product.</td>
</tr>
<tr>
    <td><CopyableCode code="provisioning_artifact_preferences" /></td>
    <td><code>object</code></td>
    <td>An object that contains information about preferences, such as Regions and accounts, for the provisioning artifact.</td>
</tr>
<tr>
    <td><CopyableCode code="tag_options" /></td>
    <td><code>array</code></td>
    <td>Information about the TagOptions associated with the resource.</td>
</tr>
<tr>
    <td><CopyableCode code="usage_instructions" /></td>
    <td><code>array</code></td>
    <td>Any additional metadata specifically related to the provisioning of the product. For example, see the Version field of the CloudFormation template.</td>
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
    <td><a href="#describe_provisioning_parameters"><CopyableCode code="describe_provisioning_parameters" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets information about the configuration required to provision the specified product using the specified provisioning artifact. If the output contains a TagOption key with an empty list of values, there is a TagOption conflict for that key. The end user cannot take action to fix the conflict, and launch is not blocked. In subsequent calls to ProvisionProduct, do not include conflicted TagOption keys as tags, or this causes the error "Parameter validation failed: Missing required parameter in Tags&#91;N&#93;:Value". Tag the provisioned product with the value sc-tagoption-conflict-portfolioId-productId.</td>
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
    defaultValue="describe_provisioning_parameters"
    values={[
        { label: 'describe_provisioning_parameters', value: 'describe_provisioning_parameters' }
    ]}
>
<TabItem value="describe_provisioning_parameters">

Gets information about the configuration required to provision the specified product using the specified provisioning artifact. If the output contains a TagOption key with an empty list of values, there is a TagOption conflict for that key. The end user cannot take action to fix the conflict, and launch is not blocked. In subsequent calls to ProvisionProduct, do not include conflicted TagOption keys as tags, or this causes the error "Parameter validation failed: Missing required parameter in Tags[N]:Value". Tag the provisioned product with the value sc-tagoption-conflict-portfolioId-productId.

```sql
SELECT
constraint_summaries,
provisioning_artifact_output_keys,
provisioning_artifact_outputs,
provisioning_artifact_parameters,
provisioning_artifact_preferences,
tag_options,
usage_instructions
FROM aws.servicecatalog.provisioning_parameters
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
