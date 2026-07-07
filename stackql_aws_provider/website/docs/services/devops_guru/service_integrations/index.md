--- 
title: service_integrations
hide_title: false
hide_table_of_contents: false
keywords:
  - service_integrations
  - devops_guru
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

Creates, updates, deletes, gets or lists a <code>service_integrations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="service_integrations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.devops_guru.service_integrations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_service_integration"
    values={[
        { label: 'describe_service_integration', value: 'describe_service_integration' }
    ]}
>
<TabItem value="describe_service_integration">

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
    <td><CopyableCode code="KMSServerSideEncryption" /></td>
    <td><code>object</code></td>
    <td>Information about whether DevOps Guru is configured to encrypt server-side data using KMS.</td>
</tr>
<tr>
    <td><CopyableCode code="LogsAnomalyDetection" /></td>
    <td><code>object</code></td>
    <td>Information about whether DevOps Guru is configured to perform log anomaly detection on Amazon CloudWatch log groups.</td>
</tr>
<tr>
    <td><CopyableCode code="OpsCenter" /></td>
    <td><code>object</code></td>
    <td>Information about whether DevOps Guru is configured to create an OpsItem in Amazon Web Services Systems Manager OpsCenter for each created insight.</td>
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
    <td><a href="#describe_service_integration"><CopyableCode code="describe_service_integration" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns the integration status of services that are integrated with DevOps Guru. The one service that can be integrated with DevOps Guru is Amazon Web Services Systems Manager, which can be used to create an OpsItem for each generated insight.</td>
</tr>
<tr>
    <td><a href="#update_service_integration"><CopyableCode code="update_service_integration" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ServiceIntegration"><code>ServiceIntegration</code></a></td>
    <td></td>
    <td>Enables or disables integration with a service that can be integrated with DevOps Guru. The one service that can be integrated with DevOps Guru is Amazon Web Services Systems Manager, which can be used to create an OpsItem for each generated insight.</td>
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
    defaultValue="describe_service_integration"
    values={[
        { label: 'describe_service_integration', value: 'describe_service_integration' }
    ]}
>
<TabItem value="describe_service_integration">

Returns the integration status of services that are integrated with DevOps Guru. The one service that can be integrated with DevOps Guru is Amazon Web Services Systems Manager, which can be used to create an OpsItem for each generated insight.

```sql
SELECT
KMSServerSideEncryption,
LogsAnomalyDetection,
OpsCenter
FROM aws.devops_guru.service_integrations
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_service_integration"
    values={[
        { label: 'update_service_integration', value: 'update_service_integration' }
    ]}
>
<TabItem value="update_service_integration">

Enables or disables integration with a service that can be integrated with DevOps Guru. The one service that can be integrated with DevOps Guru is Amazon Web Services Systems Manager, which can be used to create an OpsItem for each generated insight.

```sql
UPDATE aws.devops_guru.service_integrations
SET 
ServiceIntegration = '{{ ServiceIntegration }}'
WHERE 
region = '{{ region }}' --required
AND ServiceIntegration = '{{ ServiceIntegration }}' --required;
```
</TabItem>
</Tabs>
