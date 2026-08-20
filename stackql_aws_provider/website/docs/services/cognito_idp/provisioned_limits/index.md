--- 
title: provisioned_limits
hide_title: false
hide_table_of_contents: false
keywords:
  - provisioned_limits
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

Creates, updates, deletes, gets or lists a <code>provisioned_limits</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="provisioned_limits" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.cognito_idp.provisioned_limits" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_provisioned_limit"
    values={[
        { label: 'get_provisioned_limit', value: 'get_provisioned_limit' }
    ]}
>
<TabItem value="get_provisioned_limit">

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
    <td><CopyableCode code="free_limit_value" /></td>
    <td><code>integer</code></td>
    <td>The default (free) limit value, in requests per second (RPS). This is the rate included at no additional cost.</td>
</tr>
<tr>
    <td><CopyableCode code="limit_definition" /></td>
    <td><code>object</code></td>
    <td>The definition that identifies this limit, including the class and attributes.</td>
</tr>
<tr>
    <td><CopyableCode code="provisioned_limit_value" /></td>
    <td><code>integer</code></td>
    <td>The provisioned limit value, in requests per second (RPS). This is the rate that Amazon Cognito currently enforces for your account.</td>
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
    <td><a href="#get_provisioned_limit"><CopyableCode code="get_provisioned_limit" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns the current provisioned limit for a specific API category. Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy. Learn more Signing Amazon Web Services API Requests Using the Amazon Cognito user pools API and user pool endpoints</td>
</tr>
<tr>
    <td><a href="#update_provisioned_limit"><CopyableCode code="update_provisioned_limit" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-LimitDefinition"><code>LimitDefinition</code></a>, <a href="#parameter-RequestedLimitValue"><code>RequestedLimitValue</code></a></td>
    <td></td>
    <td>Sets the provisioned limit for a specific API category. The value must be between the default limit and your account-level maximum limit in Service Quotas. Managed login user pools don't support adjustments to the UserAuthentication or UserFederation categories. To increase these limits, submit a Service Quotas increase request. Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy. Learn more Signing Amazon Web Services API Requests Using the Amazon Cognito user pools API and user pool endpoints</td>
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
    defaultValue="get_provisioned_limit"
    values={[
        { label: 'get_provisioned_limit', value: 'get_provisioned_limit' }
    ]}
>
<TabItem value="get_provisioned_limit">

Returns the current provisioned limit for a specific API category. Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy. Learn more Signing Amazon Web Services API Requests Using the Amazon Cognito user pools API and user pool endpoints

```sql
SELECT
free_limit_value,
limit_definition,
provisioned_limit_value
FROM aws.cognito_idp.provisioned_limits
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_provisioned_limit"
    values={[
        { label: 'update_provisioned_limit', value: 'update_provisioned_limit' }
    ]}
>
<TabItem value="update_provisioned_limit">

Sets the provisioned limit for a specific API category. The value must be between the default limit and your account-level maximum limit in Service Quotas. Managed login user pools don't support adjustments to the UserAuthentication or UserFederation categories. To increase these limits, submit a Service Quotas increase request. Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy. Learn more Signing Amazon Web Services API Requests Using the Amazon Cognito user pools API and user pool endpoints

```sql
UPDATE aws.cognito_idp.provisioned_limits
SET 
LimitDefinition = '{{ LimitDefinition }}',
RequestedLimitValue = {{ RequestedLimitValue }}
WHERE 
region = '{{ region }}' --required
AND LimitDefinition = '{{ LimitDefinition }}' --required
AND RequestedLimitValue = '{{ RequestedLimitValue }}' --required
RETURNING
limit;
```
</TabItem>
</Tabs>
