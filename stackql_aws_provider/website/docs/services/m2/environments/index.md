--- 
title: environments
hide_title: false
hide_table_of_contents: false
keywords:
  - environments
  - m2
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

Creates, updates, deletes, gets or lists an <code>environments</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="environments" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.m2.environments" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_environment"
    values={[
        { label: 'get_environment', value: 'get_environment' },
        { label: 'list_environments', value: 'list_environments' }
    ]}
>
<TabItem value="get_environment">

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
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the runtime environment. Must be unique within the account. (pattern: &lt;code&gt;^&#91;A-Za-z0-9&#93;&#91;A-Za-z0-9_\-&#93;&#123;1,59&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="actualCapacity" /></td>
    <td><code>integer</code></td>
    <td>The number of instances included in the runtime environment. A standalone runtime environment has a maximum of one instance. Currently, a high availability runtime environment has a maximum of two instances.</td>
</tr>
<tr>
    <td><CopyableCode code="creationTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the runtime environment was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the runtime environment.</td>
</tr>
<tr>
    <td><CopyableCode code="engineType" /></td>
    <td><code>string</code></td>
    <td>The target platform for the runtime environment. (microfocus, bluage)</td>
</tr>
<tr>
    <td><CopyableCode code="engineVersion" /></td>
    <td><code>string</code></td>
    <td>The version of the runtime engine. (pattern: &lt;code&gt;^\S&#123;1,10&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="environmentArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the runtime environment. (pattern: &lt;code&gt;^arn:(aws|aws-cn|aws-iso|aws-iso-&#91;a-z&#93;&#123;1&#125;|aws-us-gov):&#91;A-Za-z0-9&#93;&#91;A-Za-z0-9_/.-&#93;&#123;0,62&#125;:(&#91;a-z&#93;&#123;2&#125;-((iso&#91;a-z&#93;&#123;0,1&#125;-)|(gov-))&#123;0,1&#125;&#91;a-z&#93;+-&#91;0-9&#93;|):&#91;0-9&#93;&#123;12&#125;:&#91;A-Za-z0-9/&#93;&#91;A-Za-z0-9:_/+=,@.-&#93;&#123;0,1023&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="environmentId" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the runtime environment. (pattern: &lt;code&gt;^\S&#123;1,80&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="highAvailabilityConfig" /></td>
    <td><code>object</code></td>
    <td>Defines the details of a high availability configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="instanceType" /></td>
    <td><code>string</code></td>
    <td>The type of instance underlying the runtime environment. (pattern: &lt;code&gt;^\S&#123;1,20&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="kmsKeyId" /></td>
    <td><code>string</code></td>
    <td>The identifier of a customer managed key.</td>
</tr>
<tr>
    <td><CopyableCode code="loadBalancerArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) for the load balancer used with the runtime environment.</td>
</tr>
<tr>
    <td><CopyableCode code="networkType" /></td>
    <td><code>string</code></td>
    <td>The network type supported by the runtime environment. (ipv4, dual)</td>
</tr>
<tr>
    <td><CopyableCode code="pendingMaintenance" /></td>
    <td><code>object</code></td>
    <td>Indicates the pending maintenance scheduled on this environment.</td>
</tr>
<tr>
    <td><CopyableCode code="preferredMaintenanceWindow" /></td>
    <td><code>string</code></td>
    <td>The maintenance window for the runtime environment. If you don't provide a value for the maintenance window, the service assigns a random value. (pattern: &lt;code&gt;^\S&#123;1,50&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="publiclyAccessible" /></td>
    <td><code>boolean</code></td>
    <td>Whether applications running in this runtime environment are publicly accessible.</td>
</tr>
<tr>
    <td><CopyableCode code="securityGroupIds" /></td>
    <td><code>array</code></td>
    <td>The unique identifiers of the security groups assigned to this runtime environment.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the runtime environment. If the Amazon Web Services Mainframe Modernization environment is missing a connection to the customer owned dependent resource, the status will be Unhealthy. (Creating, Available, Updating, Deleting, Failed, UnHealthy)</td>
</tr>
<tr>
    <td><CopyableCode code="statusReason" /></td>
    <td><code>string</code></td>
    <td>The reason for the reported status.</td>
</tr>
<tr>
    <td><CopyableCode code="storageConfigurations" /></td>
    <td><code>array</code></td>
    <td>The storage configurations defined for the runtime environment.</td>
</tr>
<tr>
    <td><CopyableCode code="subnetIds" /></td>
    <td><code>array</code></td>
    <td>The unique identifiers of the subnets assigned to this runtime environment.</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>The tags defined for this runtime environment.</td>
</tr>
<tr>
    <td><CopyableCode code="vpcId" /></td>
    <td><code>string</code></td>
    <td>The unique identifier for the VPC used with this runtime environment. (pattern: &lt;code&gt;^\S&#123;1,50&#125;$&lt;/code&gt;)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_environments">

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
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the runtime environment. (pattern: &lt;code&gt;^&#91;A-Za-z0-9&#93;&#91;A-Za-z0-9_\-&#93;&#123;1,59&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="creationTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp when the runtime environment was created.</td>
</tr>
<tr>
    <td><CopyableCode code="engineType" /></td>
    <td><code>string</code></td>
    <td>The target platform for the runtime environment. (microfocus, bluage)</td>
</tr>
<tr>
    <td><CopyableCode code="engineVersion" /></td>
    <td><code>string</code></td>
    <td>The version of the runtime engine. (pattern: &lt;code&gt;^\S&#123;1,10&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="environmentArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of a particular runtime environment. (pattern: &lt;code&gt;^arn:(aws|aws-cn|aws-iso|aws-iso-&#91;a-z&#93;&#123;1&#125;|aws-us-gov):&#91;A-Za-z0-9&#93;&#91;A-Za-z0-9_/.-&#93;&#123;0,62&#125;:(&#91;a-z&#93;&#123;2&#125;-((iso&#91;a-z&#93;&#123;0,1&#125;-)|(gov-))&#123;0,1&#125;&#91;a-z&#93;+-&#91;0-9&#93;|):&#91;0-9&#93;&#123;12&#125;:&#91;A-Za-z0-9/&#93;&#91;A-Za-z0-9:_/+=,@.-&#93;&#123;0,1023&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="environmentId" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of a particular runtime environment. (pattern: &lt;code&gt;^\S&#123;1,80&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="instanceType" /></td>
    <td><code>string</code></td>
    <td>The instance type of the runtime environment. (pattern: &lt;code&gt;^\S&#123;1,20&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="networkType" /></td>
    <td><code>string</code></td>
    <td>The network type supported by the runtime environment. (ipv4, dual)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the runtime environment (Creating, Available, Updating, Deleting, Failed, UnHealthy)</td>
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
    <td><a href="#get_environment"><CopyableCode code="get_environment" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-environment_id"><code>environment_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Describes a specific runtime environment.</td>
</tr>
<tr>
    <td><a href="#list_environments"><CopyableCode code="list_environments" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-engineType"><code>engineType</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-names"><code>names</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a></td>
    <td>Lists the runtime environments.</td>
</tr>
<tr>
    <td><a href="#create_environment"><CopyableCode code="create_environment" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-engineType"><code>engineType</code></a>, <a href="#parameter-instanceType"><code>instanceType</code></a>, <a href="#parameter-name"><code>name</code></a></td>
    <td></td>
    <td>Creates a runtime environment for a given runtime engine.</td>
</tr>
<tr>
    <td><a href="#update_environment"><CopyableCode code="update_environment" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-environment_id"><code>environment_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates the configuration details for a specific runtime environment.</td>
</tr>
<tr>
    <td><a href="#delete_application_from_environment"><CopyableCode code="delete_application_from_environment" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-application_id"><code>application_id</code></a>, <a href="#parameter-environment_id"><code>environment_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a specific application from the specific runtime environment where it was previously deployed. You cannot delete a runtime environment using DeleteEnvironment if any application has ever been deployed to it. This API removes the association of the application with the runtime environment so you can delete the environment smoothly.</td>
</tr>
<tr>
    <td><a href="#delete_environment"><CopyableCode code="delete_environment" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-environment_id"><code>environment_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a specific runtime environment. The environment cannot contain deployed applications. If it does, you must delete those applications before you delete the environment.</td>
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
<tr id="parameter-application_id">
    <td><CopyableCode code="application_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the application you want to delete.</td>
</tr>
<tr id="parameter-environment_id">
    <td><CopyableCode code="environment_id" /></td>
    <td><code>string</code></td>
    <td>The unique identifier of the runtime environment you want to delete.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-engineType">
    <td><CopyableCode code="engineType" /></td>
    <td><code>string</code></td>
    <td>The engine type for the runtime environment.</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of runtime environments to return.</td>
</tr>
<tr id="parameter-names">
    <td><CopyableCode code="names" /></td>
    <td><code>array</code></td>
    <td>The names of the runtime environments. Must be unique within the account.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>A pagination token to control the number of runtime environments displayed in the list.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_environment"
    values={[
        { label: 'get_environment', value: 'get_environment' },
        { label: 'list_environments', value: 'list_environments' }
    ]}
>
<TabItem value="get_environment">

Describes a specific runtime environment.

```sql
SELECT
name,
actualCapacity,
creationTime,
description,
engineType,
engineVersion,
environmentArn,
environmentId,
highAvailabilityConfig,
instanceType,
kmsKeyId,
loadBalancerArn,
networkType,
pendingMaintenance,
preferredMaintenanceWindow,
publiclyAccessible,
securityGroupIds,
status,
statusReason,
storageConfigurations,
subnetIds,
tags,
vpcId
FROM aws.m2.environments
WHERE environment_id = '{{ environment_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_environments">

Lists the runtime environments.

```sql
SELECT
name,
creationTime,
engineType,
engineVersion,
environmentArn,
environmentId,
instanceType,
networkType,
status
FROM aws.m2.environments
WHERE region = '{{ region }}' -- required
AND engineType = '{{ engineType }}'
AND maxResults = '{{ maxResults }}'
AND names = '{{ names }}'
AND nextToken = '{{ nextToken }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_environment"
    values={[
        { label: 'create_environment', value: 'create_environment' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_environment">

Creates a runtime environment for a given runtime engine.

```sql
INSERT INTO aws.m2.environments (
clientToken,
description,
engineType,
engineVersion,
highAvailabilityConfig,
instanceType,
kmsKeyId,
name,
networkType,
preferredMaintenanceWindow,
publiclyAccessible,
securityGroupIds,
storageConfigurations,
subnetIds,
tags,
region
)
SELECT 
'{{ clientToken }}',
'{{ description }}',
'{{ engineType }}' /* required */,
'{{ engineVersion }}',
'{{ highAvailabilityConfig }}',
'{{ instanceType }}' /* required */,
'{{ kmsKeyId }}',
'{{ name }}' /* required */,
'{{ networkType }}',
'{{ preferredMaintenanceWindow }}',
{{ publiclyAccessible }},
'{{ securityGroupIds }}',
'{{ storageConfigurations }}',
'{{ subnetIds }}',
'{{ tags }}',
'{{ region }}'
RETURNING
environmentId
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: environments
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the environments resource.
    - name: clientToken
      value: "{{ clientToken }}"
      description: |
        A client token is a unique, case-sensitive string of up to 128 ASCII characters with ASCII values of 33-126 inclusive. It is generated by the client to ensure idempotent operations, allowing safe retries without unintended side effects.
    - name: description
      value: "{{ description }}"
    - name: engineType
      value: "{{ engineType }}"
      valid_values: ['microfocus', 'bluage']
    - name: engineVersion
      value: "{{ engineVersion }}"
    - name: highAvailabilityConfig
      description: |
        Defines the details of a high availability configuration.
      value:
        desiredCapacity: {{ desiredCapacity }}
    - name: instanceType
      value: "{{ instanceType }}"
    - name: kmsKeyId
      value: "{{ kmsKeyId }}"
    - name: name
      value: "{{ name }}"
    - name: networkType
      value: "{{ networkType }}"
      valid_values: ['ipv4', 'dual']
    - name: preferredMaintenanceWindow
      value: "{{ preferredMaintenanceWindow }}"
    - name: publiclyAccessible
      value: {{ publiclyAccessible }}
    - name: securityGroupIds
      value:
        - "{{ securityGroupIds }}"
    - name: storageConfigurations
      value:
        - efs:
            fileSystemId: "{{ fileSystemId }}"
            mountPoint: "{{ mountPoint }}"
          fsx:
            fileSystemId: "{{ fileSystemId }}"
            mountPoint: "{{ mountPoint }}"
    - name: subnetIds
      value:
        - "{{ subnetIds }}"
    - name: tags
      value: "{{ tags }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_environment"
    values={[
        { label: 'update_environment', value: 'update_environment' }
    ]}
>
<TabItem value="update_environment">

Updates the configuration details for a specific runtime environment.

```sql
UPDATE aws.m2.environments
SET 
applyDuringMaintenanceWindow = {{ applyDuringMaintenanceWindow }},
desiredCapacity = {{ desiredCapacity }},
engineVersion = '{{ engineVersion }}',
forceUpdate = {{ forceUpdate }},
instanceType = '{{ instanceType }}',
preferredMaintenanceWindow = '{{ preferredMaintenanceWindow }}'
WHERE 
environment_id = '{{ environment_id }}' --required
AND region = '{{ region }}' --required
RETURNING
environmentId;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_application_from_environment"
    values={[
        { label: 'delete_application_from_environment', value: 'delete_application_from_environment' },
        { label: 'delete_environment', value: 'delete_environment' }
    ]}
>
<TabItem value="delete_application_from_environment">

Deletes a specific application from the specific runtime environment where it was previously deployed. You cannot delete a runtime environment using DeleteEnvironment if any application has ever been deployed to it. This API removes the association of the application with the runtime environment so you can delete the environment smoothly.

```sql
DELETE FROM aws.m2.environments
WHERE application_id = '{{ application_id }}' --required
AND environment_id = '{{ environment_id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
<TabItem value="delete_environment">

Deletes a specific runtime environment. The environment cannot contain deployed applications. If it does, you must delete those applications before you delete the environment.

```sql
DELETE FROM aws.m2.environments
WHERE environment_id = '{{ environment_id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
