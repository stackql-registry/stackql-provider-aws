--- 
title: risk_configurations
hide_title: false
hide_table_of_contents: false
keywords:
  - risk_configurations
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

Creates, updates, deletes, gets or lists a <code>risk_configurations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="risk_configurations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.cognito_idp.risk_configurations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_risk_configuration"
    values={[
        { label: 'describe_risk_configuration', value: 'describe_risk_configuration' }
    ]}
>
<TabItem value="describe_risk_configuration">

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
    <td><CopyableCode code="account_takeover_risk_configuration" /></td>
    <td><code>object</code></td>
    <td>The settings for automated responses and notification templates for adaptive authentication with threat protection.</td>
</tr>
<tr>
    <td><CopyableCode code="client_id" /></td>
    <td><code>string</code></td>
    <td>The app client where this configuration is applied. When this parameter isn't present, the risk configuration applies to all user pool app clients that don't have client-level settings. (pattern: &lt;code&gt;&#91;\w+&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="compromised_credentials_risk_configuration" /></td>
    <td><code>object</code></td>
    <td>Settings for compromised-credentials actions and authentication types with threat protection in full-function ENFORCED mode.</td>
</tr>
<tr>
    <td><CopyableCode code="last_modified_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time when the item was modified. Amazon Cognito returns this timestamp in UNIX epoch time format. Your SDK might render the output in a human-readable format like ISO 8601 or a Java Date object.</td>
</tr>
<tr>
    <td><CopyableCode code="risk_exception_configuration" /></td>
    <td><code>object</code></td>
    <td>Exceptions to the risk evaluation configuration, including always-allow and always-block IP address ranges.</td>
</tr>
<tr>
    <td><CopyableCode code="user_pool_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the user pool that has the risk configuration applied. (pattern: &lt;code&gt;&#91;\w-&#93;+_&#91;0-9a-zA-Z&#93;+&lt;/code&gt;)</td>
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
    <td><a href="#describe_risk_configuration"><CopyableCode code="describe_risk_configuration" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Given an app client or user pool ID where threat protection is configured, describes the risk configuration. This operation returns details about adaptive authentication, compromised credentials, and IP-address allow- and denylists. For more information about threat protection, see Threat protection.</td>
</tr>
<tr>
    <td><a href="#set_risk_configuration"><CopyableCode code="set_risk_configuration" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-UserPoolId"><code>UserPoolId</code></a></td>
    <td></td>
    <td>Configures threat protection for a user pool or app client. Sets configuration for the following. Responses to risks with adaptive authentication Responses to vulnerable passwords with compromised-credentials detection Notifications to users who have had risky activity detected IP-address denylist and allowlist To set the risk configuration for the user pool to defaults, send this request with only the UserPoolId parameter. To reset the threat protection settings of an app client to be inherited from the user pool, send UserPoolId and ClientId parameters only. To change threat protection to audit-only or off, update the value of UserPoolAddOns in an UpdateUserPool request. To activate this setting, your user pool must be on the Plus tier.</td>
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
    defaultValue="describe_risk_configuration"
    values={[
        { label: 'describe_risk_configuration', value: 'describe_risk_configuration' }
    ]}
>
<TabItem value="describe_risk_configuration">

Given an app client or user pool ID where threat protection is configured, describes the risk configuration. This operation returns details about adaptive authentication, compromised credentials, and IP-address allow- and denylists. For more information about threat protection, see Threat protection.

```sql
SELECT
account_takeover_risk_configuration,
client_id,
compromised_credentials_risk_configuration,
last_modified_date,
risk_exception_configuration,
user_pool_id
FROM aws.cognito_idp.risk_configurations
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="set_risk_configuration"
    values={[
        { label: 'set_risk_configuration', value: 'set_risk_configuration' }
    ]}
>
<TabItem value="set_risk_configuration">

Configures threat protection for a user pool or app client. Sets configuration for the following. Responses to risks with adaptive authentication Responses to vulnerable passwords with compromised-credentials detection Notifications to users who have had risky activity detected IP-address denylist and allowlist To set the risk configuration for the user pool to defaults, send this request with only the UserPoolId parameter. To reset the threat protection settings of an app client to be inherited from the user pool, send UserPoolId and ClientId parameters only. To change threat protection to audit-only or off, update the value of UserPoolAddOns in an UpdateUserPool request. To activate this setting, your user pool must be on the Plus tier.

```sql
UPDATE aws.cognito_idp.risk_configurations
SET 
UserPoolId = '{{ UserPoolId }}',
ClientId = '{{ ClientId }}',
CompromisedCredentialsRiskConfiguration = '{{ CompromisedCredentialsRiskConfiguration }}',
AccountTakeoverRiskConfiguration = '{{ AccountTakeoverRiskConfiguration }}',
RiskExceptionConfiguration = '{{ RiskExceptionConfiguration }}'
WHERE 
region = '{{ region }}' --required
AND UserPoolId = '{{ UserPoolId }}' --required
RETURNING
risk_configuration;
```
</TabItem>
</Tabs>
