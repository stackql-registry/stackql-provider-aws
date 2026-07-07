--- 
title: configuration_settings
hide_title: false
hide_table_of_contents: false
keywords:
  - configuration_settings
  - elasticbeanstalk
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

Creates, updates, deletes, gets or lists a <code>configuration_settings</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="configuration_settings" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.elasticbeanstalk.configuration_settings" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_configuration_settings"
    values={[
        { label: 'describe_configuration_settings', value: 'describe_configuration_settings' }
    ]}
>
<TabItem value="describe_configuration_settings">

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
    <td><CopyableCode code="ApplicationName" /></td>
    <td><code>string</code></td>
    <td>The name of the application associated with this configuration set.</td>
</tr>
<tr>
    <td><CopyableCode code="DateCreated" /></td>
    <td><code>string</code></td>
    <td>The date (in UTC time) when this configuration set was created.</td>
</tr>
<tr>
    <td><CopyableCode code="DateUpdated" /></td>
    <td><code>string</code></td>
    <td>The date (in UTC time) when this configuration set was last modified.</td>
</tr>
<tr>
    <td><CopyableCode code="DeploymentStatus" /></td>
    <td><code>string</code></td>
    <td>If this configuration set is associated with an environment, the DeploymentStatus parameter indicates the deployment status of this configuration set: null: This configuration is not associated with a running environment. pending: This is a draft configuration that is not deployed to the associated environment but is in the process of deploying. deployed: This is the configuration that is currently deployed to the associated running environment. failed: This is a draft configuration that failed to successfully deploy.</td>
</tr>
<tr>
    <td><CopyableCode code="Description" /></td>
    <td><code>string</code></td>
    <td>Describes this configuration set.</td>
</tr>
<tr>
    <td><CopyableCode code="EnvironmentName" /></td>
    <td><code>string</code></td>
    <td>If not null, the name of the environment for this configuration set.</td>
</tr>
<tr>
    <td><CopyableCode code="OptionSettings" /></td>
    <td><code>string</code></td>
    <td>A list of the configuration options and their values in this configuration set.</td>
</tr>
<tr>
    <td><CopyableCode code="PlatformArn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the platform version.</td>
</tr>
<tr>
    <td><CopyableCode code="SolutionStackName" /></td>
    <td><code>string</code></td>
    <td>The name of the solution stack this configuration set uses.</td>
</tr>
<tr>
    <td><CopyableCode code="TemplateName" /></td>
    <td><code>string</code></td>
    <td>If not null, the name of the configuration template for this configuration set.</td>
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
    <td><a href="#describe_configuration_settings"><CopyableCode code="describe_configuration_settings" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-ApplicationName"><code>ApplicationName</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-TemplateName"><code>TemplateName</code></a>, <a href="#parameter-EnvironmentName"><code>EnvironmentName</code></a></td>
    <td>Returns a description of the settings for the specified configuration set, that is, either a configuration template or the configuration set associated with a running environment. When describing the settings for the configuration set associated with a running environment, it is possible to receive two sets of setting descriptions. One is the deployed configuration set, and the other is a draft configuration of an environment that is either in the process of deployment or that failed to deploy. Related Topics DeleteEnvironmentConfiguration</td>
</tr>
<tr>
    <td><a href="#validate_configuration_settings"><CopyableCode code="validate_configuration_settings" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-ApplicationName"><code>ApplicationName</code></a>, <a href="#parameter-OptionSettings"><code>OptionSettings</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-TemplateName"><code>TemplateName</code></a>, <a href="#parameter-EnvironmentName"><code>EnvironmentName</code></a></td>
    <td>Takes a set of configuration settings and either a configuration template or environment, and determines whether those values are valid. This action returns a list of messages indicating any errors or warnings associated with the selection of option values.</td>
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
<tr id="parameter-ApplicationName">
    <td><CopyableCode code="ApplicationName" /></td>
    <td><code>string</code></td>
    <td>The name of the application that the configuration template or environment belongs to.</td>
</tr>
<tr id="parameter-OptionSettings">
    <td><CopyableCode code="OptionSettings" /></td>
    <td><code>array</code></td>
    <td>A list of the options and desired values to evaluate.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-EnvironmentName">
    <td><CopyableCode code="EnvironmentName" /></td>
    <td><code>string</code></td>
    <td>The name of the environment to validate the settings against. Condition: You cannot specify both this and a configuration template name.</td>
</tr>
<tr id="parameter-TemplateName">
    <td><CopyableCode code="TemplateName" /></td>
    <td><code>string</code></td>
    <td>The name of the configuration template to validate the settings against. Condition: You cannot specify both this and an environment name.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_configuration_settings"
    values={[
        { label: 'describe_configuration_settings', value: 'describe_configuration_settings' }
    ]}
>
<TabItem value="describe_configuration_settings">

Returns a description of the settings for the specified configuration set, that is, either a configuration template or the configuration set associated with a running environment. When describing the settings for the configuration set associated with a running environment, it is possible to receive two sets of setting descriptions. One is the deployed configuration set, and the other is a draft configuration of an environment that is either in the process of deployment or that failed to deploy. Related Topics DeleteEnvironmentConfiguration

```sql
SELECT
ApplicationName,
DateCreated,
DateUpdated,
DeploymentStatus,
Description,
EnvironmentName,
OptionSettings,
PlatformArn,
SolutionStackName,
TemplateName
FROM aws.elasticbeanstalk.configuration_settings
WHERE ApplicationName = '{{ ApplicationName }}' -- required
AND region = '{{ region }}' -- required
AND TemplateName = '{{ TemplateName }}'
AND EnvironmentName = '{{ EnvironmentName }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="validate_configuration_settings"
    values={[
        { label: 'validate_configuration_settings', value: 'validate_configuration_settings' }
    ]}
>
<TabItem value="validate_configuration_settings">

Takes a set of configuration settings and either a configuration template or environment, and determines whether those values are valid. This action returns a list of messages indicating any errors or warnings associated with the selection of option values.

```sql
EXEC aws.elasticbeanstalk.configuration_settings.validate_configuration_settings 
@ApplicationName='{{ ApplicationName }}' --required, 
@OptionSettings='{{ OptionSettings }}' --required, 
@region='{{ region }}' --required, 
@TemplateName='{{ TemplateName }}', 
@EnvironmentName='{{ EnvironmentName }}'
;
```
</TabItem>
</Tabs>
