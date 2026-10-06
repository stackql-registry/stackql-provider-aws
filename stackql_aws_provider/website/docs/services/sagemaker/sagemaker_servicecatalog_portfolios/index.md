--- 
title: sagemaker_servicecatalog_portfolios
hide_title: false
hide_table_of_contents: false
keywords:
  - sagemaker_servicecatalog_portfolios
  - sagemaker
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

Creates, updates, deletes, gets or lists a <code>sagemaker_servicecatalog_portfolios</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="sagemaker_servicecatalog_portfolios" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.sagemaker.sagemaker_servicecatalog_portfolios" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

`SELECT` not supported for this resource, use `SHOW METHODS` to view available operations for the resource.


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
    <td><a href="#disable_sagemaker_servicecatalog_portfolio"><CopyableCode code="disable_sagemaker_servicecatalog_portfolio" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Disables using Service Catalog in SageMaker. Service Catalog is used to create SageMaker projects.</td>
</tr>
<tr>
    <td><a href="#enable_sagemaker_servicecatalog_portfolio"><CopyableCode code="enable_sagemaker_servicecatalog_portfolio" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Enables using Service Catalog in SageMaker. Service Catalog is used to create SageMaker projects.</td>
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

## Lifecycle Methods

<Tabs
    defaultValue="disable_sagemaker_servicecatalog_portfolio"
    values={[
        { label: 'disable_sagemaker_servicecatalog_portfolio', value: 'disable_sagemaker_servicecatalog_portfolio' },
        { label: 'enable_sagemaker_servicecatalog_portfolio', value: 'enable_sagemaker_servicecatalog_portfolio' }
    ]}
>
<TabItem value="disable_sagemaker_servicecatalog_portfolio">

Disables using Service Catalog in SageMaker. Service Catalog is used to create SageMaker projects.

```sql
EXEC aws.sagemaker.sagemaker_servicecatalog_portfolios.disable_sagemaker_servicecatalog_portfolio 
@region='{{ region }}' --required 
;
```
</TabItem>
<TabItem value="enable_sagemaker_servicecatalog_portfolio">

Enables using Service Catalog in SageMaker. Service Catalog is used to create SageMaker projects.

```sql
EXEC aws.sagemaker.sagemaker_servicecatalog_portfolios.enable_sagemaker_servicecatalog_portfolio 
@region='{{ region }}' --required 
;
```
</TabItem>
</Tabs>
