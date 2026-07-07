--- 
title: log_delivery_configurations
hide_title: false
hide_table_of_contents: false
keywords:
  - log_delivery_configurations
  - cognito_idp
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

Creates, updates, deletes, gets or lists a <code>log_delivery_configurations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="log_delivery_configurations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.cognito_idp.log_delivery_configurations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_log_delivery_configuration"
    values={[
        { label: 'get_log_delivery_configuration', value: 'get_log_delivery_configuration' }
    ]}
>
<TabItem value="get_log_delivery_configuration">

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
    <td><CopyableCode code="LogConfigurations" /></td>
    <td><code>array</code></td>
    <td>A logging destination of a user pool. User pools can have multiple logging destinations for message-delivery and user-activity logs.</td>
</tr>
<tr>
    <td><CopyableCode code="UserPoolId" /></td>
    <td><code>string</code></td>
    <td>The ID of the user pool where you configured logging. (pattern: &lt;code&gt;&#91;\w-&#93;+_&#91;0-9a-zA-Z&#93;+&lt;/code&gt;)</td>
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
    <td><a href="#get_log_delivery_configuration"><CopyableCode code="get_log_delivery_configuration" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Given a user pool ID, returns the logging configuration. User pools can export message-delivery error and threat-protection activity logs to external Amazon Web Services services. For more information, see Exporting user pool logs. Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy. Learn more Signing Amazon Web Services API Requests Using the Amazon Cognito user pools API and user pool endpoints</td>
</tr>
<tr>
    <td><a href="#set_log_delivery_configuration"><CopyableCode code="set_log_delivery_configuration" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-UserPoolId"><code>UserPoolId</code></a>, <a href="#parameter-LogConfigurations"><code>LogConfigurations</code></a></td>
    <td></td>
    <td>Sets up or modifies the logging configuration of a user pool. User pools can export user notification logs and, when threat protection is active, user-activity logs. For more information, see Exporting user pool logs.</td>
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
    defaultValue="get_log_delivery_configuration"
    values={[
        { label: 'get_log_delivery_configuration', value: 'get_log_delivery_configuration' }
    ]}
>
<TabItem value="get_log_delivery_configuration">

Given a user pool ID, returns the logging configuration. User pools can export message-delivery error and threat-protection activity logs to external Amazon Web Services services. For more information, see Exporting user pool logs. Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy. Learn more Signing Amazon Web Services API Requests Using the Amazon Cognito user pools API and user pool endpoints

```sql
SELECT
LogConfigurations,
UserPoolId
FROM aws.cognito_idp.log_delivery_configurations
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="set_log_delivery_configuration"
    values={[
        { label: 'set_log_delivery_configuration', value: 'set_log_delivery_configuration' }
    ]}
>
<TabItem value="set_log_delivery_configuration">

Sets up or modifies the logging configuration of a user pool. User pools can export user notification logs and, when threat protection is active, user-activity logs. For more information, see Exporting user pool logs.

```sql
UPDATE aws.cognito_idp.log_delivery_configurations
SET 
UserPoolId = '{{ UserPoolId }}',
LogConfigurations = '{{ LogConfigurations }}'
WHERE 
region = '{{ region }}' --required
AND UserPoolId = '{{ UserPoolId }}' --required
AND LogConfigurations = '{{ LogConfigurations }}' --required
RETURNING
LogDeliveryConfiguration;
```
</TabItem>
</Tabs>
