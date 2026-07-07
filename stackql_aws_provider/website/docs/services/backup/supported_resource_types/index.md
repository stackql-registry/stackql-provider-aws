--- 
title: supported_resource_types
hide_title: false
hide_table_of_contents: false
keywords:
  - supported_resource_types
  - backup
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

Creates, updates, deletes, gets or lists a <code>supported_resource_types</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="supported_resource_types" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.backup.supported_resource_types" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_supported_resource_types"
    values={[
        { label: 'get_supported_resource_types', value: 'get_supported_resource_types' }
    ]}
>
<TabItem value="get_supported_resource_types">

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
    <td><CopyableCode code="resource_type" /></td>
    <td><code>string</code></td>
    <td>Contains a string with the supported Amazon Web Services resource types: Aurora for Amazon Aurora CloudFormation for CloudFormation DocumentDB for Amazon DocumentDB (with MongoDB compatibility) DynamoDB for Amazon DynamoDB EBS for Amazon Elastic Block Store EC2 for Amazon Elastic Compute Cloud EFS for Amazon Elastic File System EKS for Amazon Elastic Kubernetes Service FSx for Amazon FSx Neptune for Amazon Neptune RDS for Amazon Relational Database Service Redshift for Amazon Redshift S3 for Amazon Simple Storage Service (Amazon S3) SAP HANA on Amazon EC2 for SAP HANA databases on Amazon Elastic Compute Cloud instances Storage Gateway for Storage Gateway Timestream for Amazon Timestream VirtualMachine for VMware virtual machines</td>
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
    <td><a href="#get_supported_resource_types"><CopyableCode code="get_supported_resource_types" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns the Amazon Web Services resource types supported by Backup.</td>
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
    defaultValue="get_supported_resource_types"
    values={[
        { label: 'get_supported_resource_types', value: 'get_supported_resource_types' }
    ]}
>
<TabItem value="get_supported_resource_types">

Returns the Amazon Web Services resource types supported by Backup.

```sql
SELECT
resource_type
FROM aws.backup.supported_resource_types
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
