--- 
title: environment_blueprint_configurations
hide_title: false
hide_table_of_contents: false
keywords:
  - environment_blueprint_configurations
  - datazone
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

Creates, updates, deletes, gets or lists an <code>environment_blueprint_configurations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="environment_blueprint_configurations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.datazone.environment_blueprint_configurations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_environment_blueprint_configuration"
    values={[
        { label: 'get_environment_blueprint_configuration', value: 'get_environment_blueprint_configuration' },
        { label: 'list_environment_blueprint_configurations', value: 'list_environment_blueprint_configurations' }
    ]}
>
<TabItem value="get_environment_blueprint_configuration">

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
    <td><CopyableCode code="createdAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp of when this blueprint was created.</td>
</tr>
<tr>
    <td><CopyableCode code="domainId" /></td>
    <td><code>string</code></td>
    <td>The ID of the Amazon DataZone domain where this blueprint exists. (pattern: &lt;code&gt;dzd&#91;-_&#93;&#91;a-zA-Z0-9_-&#93;&#123;1,36&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="enabledRegions" /></td>
    <td><code>array</code></td>
    <td>The Amazon Web Services regions in which this blueprint is enabled.</td>
</tr>
<tr>
    <td><CopyableCode code="environmentBlueprintId" /></td>
    <td><code>string</code></td>
    <td>The ID of the blueprint. (pattern: &lt;code&gt;&#91;a-zA-Z0-9_-&#93;&#123;1,36&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="environmentRolePermissionBoundary" /></td>
    <td><code>string</code></td>
    <td>The environment role permissions boundary. (pattern: &lt;code&gt;arn:aws&#91;^:&#93;*:iam::(aws|\d&#123;12&#125;):policy/&#91;\w+=,.@-&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="manageAccessRoleArn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the manage access role with which this blueprint is created. (pattern: &lt;code&gt;arn:aws&#91;^:&#93;*:iam::\d&#123;12&#125;:role(/&#91;a-zA-Z0-9+=,.@_-&#93;+)*/&#91;a-zA-Z0-9+=,.@_-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="provisioningConfigurations" /></td>
    <td><code>array</code></td>
    <td>The provisioning configuration of a blueprint.</td>
</tr>
<tr>
    <td><CopyableCode code="provisioningRoleArn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the provisioning role with which this blueprint is created. (pattern: &lt;code&gt;arn:aws&#91;^:&#93;*:iam::\d&#123;12&#125;:role(/&#91;a-zA-Z0-9+=,.@_-&#93;+)*/&#91;a-zA-Z0-9+=,.@_-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="regionalParameters" /></td>
    <td><code>object</code></td>
    <td>The regional parameters of the blueprint.</td>
</tr>
<tr>
    <td><CopyableCode code="updatedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp of when this blueprint was upated.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_environment_blueprint_configurations">

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
    <td><CopyableCode code="createdAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp of when an environment blueprint was created.</td>
</tr>
<tr>
    <td><CopyableCode code="domainId" /></td>
    <td><code>string</code></td>
    <td>The identifier of the Amazon DataZone domain in which an environment blueprint exists. (pattern: &lt;code&gt;dzd&#91;-_&#93;&#91;a-zA-Z0-9_-&#93;&#123;1,36&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="enabledRegions" /></td>
    <td><code>array</code></td>
    <td>The enabled Amazon Web Services Regions specified in a blueprint configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="environmentBlueprintId" /></td>
    <td><code>string</code></td>
    <td>The identifier of the environment blueprint. (pattern: &lt;code&gt;&#91;a-zA-Z0-9_-&#93;&#123;1,36&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="environmentRolePermissionBoundary" /></td>
    <td><code>string</code></td>
    <td>The environment role permission boundary. (pattern: &lt;code&gt;arn:aws&#91;^:&#93;*:iam::(aws|\d&#123;12&#125;):policy/&#91;\w+=,.@-&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="manageAccessRoleArn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the manage access role specified in the environment blueprint configuration. (pattern: &lt;code&gt;arn:aws&#91;^:&#93;*:iam::\d&#123;12&#125;:role(/&#91;a-zA-Z0-9+=,.@_-&#93;+)*/&#91;a-zA-Z0-9+=,.@_-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="provisioningConfigurations" /></td>
    <td><code>array</code></td>
    <td>The provisioning configuration of a blueprint.</td>
</tr>
<tr>
    <td><CopyableCode code="provisioningRoleArn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the provisioning role specified in the environment blueprint configuration. (pattern: &lt;code&gt;arn:aws&#91;^:&#93;*:iam::\d&#123;12&#125;:role(/&#91;a-zA-Z0-9+=,.@_-&#93;+)*/&#91;a-zA-Z0-9+=,.@_-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="regionalParameters" /></td>
    <td><code>object</code></td>
    <td>The regional parameters of the environment blueprint.</td>
</tr>
<tr>
    <td><CopyableCode code="updatedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp of when the environment blueprint was updated.</td>
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
    <td><a href="#get_environment_blueprint_configuration"><CopyableCode code="get_environment_blueprint_configuration" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-domain_identifier"><code>domain_identifier</code></a>, <a href="#parameter-environment_blueprint_identifier"><code>environment_blueprint_identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets the blueprint configuration in Amazon DataZone.</td>
</tr>
<tr>
    <td><a href="#list_environment_blueprint_configurations"><CopyableCode code="list_environment_blueprint_configurations" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-domain_identifier"><code>domain_identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a></td>
    <td>Lists blueprint configurations for a Amazon DataZone environment.</td>
</tr>
<tr>
    <td><a href="#put_environment_blueprint_configuration"><CopyableCode code="put_environment_blueprint_configuration" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-domain_identifier"><code>domain_identifier</code></a>, <a href="#parameter-environment_blueprint_identifier"><code>environment_blueprint_identifier</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-enabledRegions"><code>enabledRegions</code></a></td>
    <td></td>
    <td>Writes the configuration for the specified environment blueprint in Amazon DataZone.</td>
</tr>
<tr>
    <td><a href="#delete_environment_blueprint_configuration"><CopyableCode code="delete_environment_blueprint_configuration" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-domain_identifier"><code>domain_identifier</code></a>, <a href="#parameter-environment_blueprint_identifier"><code>environment_blueprint_identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the blueprint configuration in Amazon DataZone.</td>
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
<tr id="parameter-domain_identifier">
    <td><CopyableCode code="domain_identifier" /></td>
    <td><code>string</code></td>
    <td>The ID of the Amazon DataZone domain in which the blueprint configuration is deleted.</td>
</tr>
<tr id="parameter-environment_blueprint_identifier">
    <td><CopyableCode code="environment_blueprint_identifier" /></td>
    <td><code>string</code></td>
    <td>The ID of the blueprint the configuration of which is deleted.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of blueprint configurations to return in a single call to ListEnvironmentBlueprintConfigurations. When the number of configurations to be listed is greater than the value of MaxResults, the response contains a NextToken value that you can use in a subsequent call to ListEnvironmentBlueprintConfigurations to list the next set of configurations.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>When the number of blueprint configurations is greater than the default value for the MaxResults parameter, or if you explicitly specify a value for MaxResults that is less than the number of configurations, the response includes a pagination token named NextToken. You can specify this NextToken value in a subsequent call to ListEnvironmentBlueprintConfigurations to list the next set of configurations.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_environment_blueprint_configuration"
    values={[
        { label: 'get_environment_blueprint_configuration', value: 'get_environment_blueprint_configuration' },
        { label: 'list_environment_blueprint_configurations', value: 'list_environment_blueprint_configurations' }
    ]}
>
<TabItem value="get_environment_blueprint_configuration">

Gets the blueprint configuration in Amazon DataZone.

```sql
SELECT
createdAt,
domainId,
enabledRegions,
environmentBlueprintId,
environmentRolePermissionBoundary,
manageAccessRoleArn,
provisioningConfigurations,
provisioningRoleArn,
regionalParameters,
updatedAt
FROM aws.datazone.environment_blueprint_configurations
WHERE domain_identifier = '{{ domain_identifier }}' -- required
AND environment_blueprint_identifier = '{{ environment_blueprint_identifier }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_environment_blueprint_configurations">

Lists blueprint configurations for a Amazon DataZone environment.

```sql
SELECT
createdAt,
domainId,
enabledRegions,
environmentBlueprintId,
environmentRolePermissionBoundary,
manageAccessRoleArn,
provisioningConfigurations,
provisioningRoleArn,
regionalParameters,
updatedAt
FROM aws.datazone.environment_blueprint_configurations
WHERE domain_identifier = '{{ domain_identifier }}' -- required
AND region = '{{ region }}' -- required
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="put_environment_blueprint_configuration"
    values={[
        { label: 'put_environment_blueprint_configuration', value: 'put_environment_blueprint_configuration' }
    ]}
>
<TabItem value="put_environment_blueprint_configuration">

Writes the configuration for the specified environment blueprint in Amazon DataZone.

```sql
REPLACE aws.datazone.environment_blueprint_configurations
SET 
provisioningRoleArn = '{{ provisioningRoleArn }}',
manageAccessRoleArn = '{{ manageAccessRoleArn }}',
environmentRolePermissionBoundary = '{{ environmentRolePermissionBoundary }}',
enabledRegions = '{{ enabledRegions }}',
regionalParameters = '{{ regionalParameters }}',
globalParameters = '{{ globalParameters }}',
provisioningConfigurations = '{{ provisioningConfigurations }}'
WHERE 
domain_identifier = '{{ domain_identifier }}' --required
AND environment_blueprint_identifier = '{{ environment_blueprint_identifier }}' --required
AND region = '{{ region }}' --required
AND enabledRegions = '{{ enabledRegions }}' --required
RETURNING
createdAt,
domainId,
enabledRegions,
environmentBlueprintId,
environmentRolePermissionBoundary,
manageAccessRoleArn,
provisioningConfigurations,
provisioningRoleArn,
regionalParameters,
updatedAt;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_environment_blueprint_configuration"
    values={[
        { label: 'delete_environment_blueprint_configuration', value: 'delete_environment_blueprint_configuration' }
    ]}
>
<TabItem value="delete_environment_blueprint_configuration">

Deletes the blueprint configuration in Amazon DataZone.

```sql
DELETE FROM aws.datazone.environment_blueprint_configurations
WHERE domain_identifier = '{{ domain_identifier }}' --required
AND environment_blueprint_identifier = '{{ environment_blueprint_identifier }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
