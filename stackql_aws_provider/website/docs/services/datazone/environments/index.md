--- 
title: environments
hide_title: false
hide_table_of_contents: false
keywords:
  - environments
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

Creates, updates, deletes, gets or lists an <code>environments</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="environments" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.datazone.environments" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_environments"
    values={[
        { label: 'list_environments', value: 'list_environments' },
        { label: 'get_environment', value: 'get_environment' }
    ]}
>
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
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the environment. (pattern: &lt;code&gt;&#91;a-zA-Z0-9_-&#93;&#123;1,36&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the environment. (pattern: &lt;code&gt;&#91;\w -&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="awsAccountId" /></td>
    <td><code>string</code></td>
    <td>The identifier of the Amazon Web Services account in which an environment exists. (pattern: &lt;code&gt;\d&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="awsAccountRegion" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services Region in which an environment exists. (pattern: &lt;code&gt;&#91;a-z&#93;&#123;2&#125;-&#91;a-z&#93;&#123;4,10&#125;-\d&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="createdAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp of when the environment was created.</td>
</tr>
<tr>
    <td><CopyableCode code="createdBy" /></td>
    <td><code>string</code></td>
    <td>The Amazon DataZone user who created the environment.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the environment.</td>
</tr>
<tr>
    <td><CopyableCode code="domainId" /></td>
    <td><code>string</code></td>
    <td>The identifier of the Amazon DataZone domain in which the environment exists. (pattern: &lt;code&gt;dzd&#91;-_&#93;&#91;a-zA-Z0-9_-&#93;&#123;1,36&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="environmentConfigurationId" /></td>
    <td><code>string</code></td>
    <td>The configuration ID with which the environment is created. (pattern: &lt;code&gt;&#91;a-zA-Z0-9_-&#93;&#123;1,36&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="environmentConfigurationName" /></td>
    <td><code>string</code></td>
    <td>The configuration name with which the environment is created. (pattern: &lt;code&gt;&#91;\w -&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="environmentProfileId" /></td>
    <td><code>string</code></td>
    <td>The identifier of the environment profile with which the environment was created. (pattern: &lt;code&gt;&#91;a-zA-Z0-9_-&#93;&#123;0,36&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="projectId" /></td>
    <td><code>string</code></td>
    <td>The identifier of the project in which the environment exists. (pattern: &lt;code&gt;&#91;a-zA-Z0-9_-&#93;&#123;1,36&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="provider" /></td>
    <td><code>string</code></td>
    <td>The provider of the environment.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the environment. (ACTIVE, CREATING, UPDATING, DELETING, CREATE_FAILED, UPDATE_FAILED, DELETE_FAILED, VALIDATION_FAILED, SUSPENDED, DISABLED, EXPIRED, DELETED, INACCESSIBLE)</td>
</tr>
<tr>
    <td><CopyableCode code="updatedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp of when the environment was updated.</td>
</tr>
</tbody>
</table>
</TabItem>
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
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The ID of the environment. (pattern: &lt;code&gt;&#91;a-zA-Z0-9_-&#93;&#123;1,36&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the environment. (pattern: &lt;code&gt;&#91;\w -&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="awsAccountId" /></td>
    <td><code>string</code></td>
    <td>The ID of the Amazon Web Services account where the environment exists. (pattern: &lt;code&gt;\d&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="awsAccountRegion" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services region where the environment exists. (pattern: &lt;code&gt;&#91;a-z&#93;&#123;2&#125;-&#91;a-z&#93;&#123;4,10&#125;-\d&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="createdAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp of when the environment was created.</td>
</tr>
<tr>
    <td><CopyableCode code="createdBy" /></td>
    <td><code>string</code></td>
    <td>The Amazon DataZone user who created the environment.</td>
</tr>
<tr>
    <td><CopyableCode code="deploymentProperties" /></td>
    <td><code>object</code></td>
    <td>The deployment properties of the environment.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the environment.</td>
</tr>
<tr>
    <td><CopyableCode code="domainId" /></td>
    <td><code>string</code></td>
    <td>The ID of the Amazon DataZone domain where the environment exists. (pattern: &lt;code&gt;dzd&#91;-_&#93;&#91;a-zA-Z0-9_-&#93;&#123;1,36&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="environmentActions" /></td>
    <td><code>array</code></td>
    <td>The actions of the environment.</td>
</tr>
<tr>
    <td><CopyableCode code="environmentBlueprintId" /></td>
    <td><code>string</code></td>
    <td>The blueprint with which the environment is created. (pattern: &lt;code&gt;&#91;a-zA-Z0-9_-&#93;&#123;1,36&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="environmentConfigurationId" /></td>
    <td><code>string</code></td>
    <td>The configuration ID that is used to create the environment. (pattern: &lt;code&gt;&#91;a-zA-Z0-9_-&#93;&#123;1,36&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="environmentConfigurationName" /></td>
    <td><code>string</code></td>
    <td>The configuration name that is used to create the environment. (pattern: &lt;code&gt;&#91;\w -&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="environmentProfileId" /></td>
    <td><code>string</code></td>
    <td>The ID of the environment profile with which the environment is created. (pattern: &lt;code&gt;&#91;a-zA-Z0-9_-&#93;&#123;0,36&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="glossaryTerms" /></td>
    <td><code>array</code></td>
    <td>The business glossary terms that can be used in this environment.</td>
</tr>
<tr>
    <td><CopyableCode code="lastDeployment" /></td>
    <td><code>object</code></td>
    <td>The details of the last deployment of the environment.</td>
</tr>
<tr>
    <td><CopyableCode code="projectId" /></td>
    <td><code>string</code></td>
    <td>The ID of the Amazon DataZone project in which this environment is created. (pattern: &lt;code&gt;&#91;a-zA-Z0-9_-&#93;&#123;1,36&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="provider" /></td>
    <td><code>string</code></td>
    <td>The provider of this Amazon DataZone environment.</td>
</tr>
<tr>
    <td><CopyableCode code="provisionedResources" /></td>
    <td><code>array</code></td>
    <td>The provisioned resources of this Amazon DataZone environment.</td>
</tr>
<tr>
    <td><CopyableCode code="provisioningProperties" /></td>
    <td><code>object</code></td>
    <td>The provisioning properties of an environment blueprint.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of this Amazon DataZone environment. (ACTIVE, CREATING, UPDATING, DELETING, CREATE_FAILED, UPDATE_FAILED, DELETE_FAILED, VALIDATION_FAILED, SUSPENDED, DISABLED, EXPIRED, DELETED, INACCESSIBLE)</td>
</tr>
<tr>
    <td><CopyableCode code="updatedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp of when this environment was updated.</td>
</tr>
<tr>
    <td><CopyableCode code="userParameters" /></td>
    <td><code>array</code></td>
    <td>The user parameters of this Amazon DataZone environment.</td>
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
    <td><a href="#list_environments"><CopyableCode code="list_environments" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-domain_identifier"><code>domain_identifier</code></a>, <a href="#parameter-projectIdentifier"><code>projectIdentifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-awsAccountId"><code>awsAccountId</code></a>, <a href="#parameter-status"><code>status</code></a>, <a href="#parameter-awsAccountRegion"><code>awsAccountRegion</code></a>, <a href="#parameter-environmentProfileIdentifier"><code>environmentProfileIdentifier</code></a>, <a href="#parameter-environmentBlueprintIdentifier"><code>environmentBlueprintIdentifier</code></a>, <a href="#parameter-provider"><code>provider</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a></td>
    <td>Lists Amazon DataZone environments.</td>
</tr>
<tr>
    <td><a href="#get_environment"><CopyableCode code="get_environment" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-domain_identifier"><code>domain_identifier</code></a>, <a href="#parameter-identifier"><code>identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets an Amazon DataZone environment.</td>
</tr>
<tr>
    <td><a href="#create_environment"><CopyableCode code="create_environment" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-domain_identifier"><code>domain_identifier</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-projectIdentifier"><code>projectIdentifier</code></a>, <a href="#parameter-name"><code>name</code></a></td>
    <td></td>
    <td>Create an Amazon DataZone environment.</td>
</tr>
<tr>
    <td><a href="#associate_environment_role"><CopyableCode code="associate_environment_role" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-domain_identifier"><code>domain_identifier</code></a>, <a href="#parameter-environment_identifier"><code>environment_identifier</code></a>, <a href="#parameter-environment_role_arn"><code>environment_role_arn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Associates the environment role in Amazon DataZone.</td>
</tr>
<tr>
    <td><a href="#update_environment"><CopyableCode code="update_environment" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-domain_identifier"><code>domain_identifier</code></a>, <a href="#parameter-identifier"><code>identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates the specified environment in Amazon DataZone.</td>
</tr>
<tr>
    <td><a href="#delete_environment"><CopyableCode code="delete_environment" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-domain_identifier"><code>domain_identifier</code></a>, <a href="#parameter-identifier"><code>identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes an environment in Amazon DataZone.</td>
</tr>
<tr>
    <td><a href="#disassociate_environment_role"><CopyableCode code="disassociate_environment_role" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-domain_identifier"><code>domain_identifier</code></a>, <a href="#parameter-environment_identifier"><code>environment_identifier</code></a>, <a href="#parameter-environment_role_arn"><code>environment_role_arn</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Disassociates the environment role in Amazon DataZone.</td>
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
    <td>The ID of the Amazon DataZone domain in which an environment role is disassociated.</td>
</tr>
<tr id="parameter-environment_identifier">
    <td><CopyableCode code="environment_identifier" /></td>
    <td><code>string</code></td>
    <td>The ID of the environment.</td>
</tr>
<tr id="parameter-environment_role_arn">
    <td><CopyableCode code="environment_role_arn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the environment role.</td>
</tr>
<tr id="parameter-identifier">
    <td><CopyableCode code="identifier" /></td>
    <td><code>string</code></td>
    <td>The identifier of the environment that is to be deleted.</td>
</tr>
<tr id="parameter-projectIdentifier">
    <td><CopyableCode code="projectIdentifier" /></td>
    <td><code>string</code></td>
    <td>The identifier of the Amazon DataZone project.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-awsAccountId">
    <td><CopyableCode code="awsAccountId" /></td>
    <td><code>string</code></td>
    <td>The identifier of the Amazon Web Services account where you want to list environments.</td>
</tr>
<tr id="parameter-awsAccountRegion">
    <td><CopyableCode code="awsAccountRegion" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services region where you want to list environments.</td>
</tr>
<tr id="parameter-environmentBlueprintIdentifier">
    <td><CopyableCode code="environmentBlueprintIdentifier" /></td>
    <td><code>string</code></td>
    <td>The identifier of the Amazon DataZone blueprint.</td>
</tr>
<tr id="parameter-environmentProfileIdentifier">
    <td><CopyableCode code="environmentProfileIdentifier" /></td>
    <td><code>string</code></td>
    <td>The identifier of the environment profile.</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of environments to return in a single call to ListEnvironments. When the number of environments to be listed is greater than the value of MaxResults, the response contains a NextToken value that you can use in a subsequent call to ListEnvironments to list the next set of environments.</td>
</tr>
<tr id="parameter-name">
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the environment.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>When the number of environments is greater than the default value for the MaxResults parameter, or if you explicitly specify a value for MaxResults that is less than the number of environments, the response includes a pagination token named NextToken. You can specify this NextToken value in a subsequent call to ListEnvironments to list the next set of environments.</td>
</tr>
<tr id="parameter-provider">
    <td><CopyableCode code="provider" /></td>
    <td><code>string</code></td>
    <td>The provider of the environment.</td>
</tr>
<tr id="parameter-status">
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the environments that you want to list.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_environments"
    values={[
        { label: 'list_environments', value: 'list_environments' },
        { label: 'get_environment', value: 'get_environment' }
    ]}
>
<TabItem value="list_environments">

Lists Amazon DataZone environments.

```sql
SELECT
id,
name,
awsAccountId,
awsAccountRegion,
createdAt,
createdBy,
description,
domainId,
environmentConfigurationId,
environmentConfigurationName,
environmentProfileId,
projectId,
provider,
status,
updatedAt
FROM aws.datazone.environments
WHERE domain_identifier = '{{ domain_identifier }}' -- required
AND projectIdentifier = '{{ projectIdentifier }}' -- required
AND region = '{{ region }}' -- required
AND awsAccountId = '{{ awsAccountId }}'
AND status = '{{ status }}'
AND awsAccountRegion = '{{ awsAccountRegion }}'
AND environmentProfileIdentifier = '{{ environmentProfileIdentifier }}'
AND environmentBlueprintIdentifier = '{{ environmentBlueprintIdentifier }}'
AND provider = '{{ provider }}'
AND name = '{{ name }}'
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
;
```
</TabItem>
<TabItem value="get_environment">

Gets an Amazon DataZone environment.

```sql
SELECT
id,
name,
awsAccountId,
awsAccountRegion,
createdAt,
createdBy,
deploymentProperties,
description,
domainId,
environmentActions,
environmentBlueprintId,
environmentConfigurationId,
environmentConfigurationName,
environmentProfileId,
glossaryTerms,
lastDeployment,
projectId,
provider,
provisionedResources,
provisioningProperties,
status,
updatedAt,
userParameters
FROM aws.datazone.environments
WHERE domain_identifier = '{{ domain_identifier }}' -- required
AND identifier = '{{ identifier }}' -- required
AND region = '{{ region }}' -- required
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

Create an Amazon DataZone environment.

```sql
INSERT INTO aws.datazone.environments (
projectIdentifier,
description,
name,
environmentProfileIdentifier,
userParameters,
glossaryTerms,
environmentAccountIdentifier,
environmentAccountRegion,
environmentBlueprintIdentifier,
deploymentOrder,
environmentConfigurationId,
environmentConfigurationName,
domain_identifier,
region
)
SELECT 
'{{ projectIdentifier }}' /* required */,
'{{ description }}',
'{{ name }}' /* required */,
'{{ environmentProfileIdentifier }}',
'{{ userParameters }}',
'{{ glossaryTerms }}',
'{{ environmentAccountIdentifier }}',
'{{ environmentAccountRegion }}',
'{{ environmentBlueprintIdentifier }}',
{{ deploymentOrder }},
'{{ environmentConfigurationId }}',
'{{ environmentConfigurationName }}',
'{{ domain_identifier }}',
'{{ region }}'
RETURNING
id,
name,
awsAccountId,
awsAccountRegion,
createdAt,
createdBy,
deploymentProperties,
description,
domainId,
environmentActions,
environmentBlueprintId,
environmentConfigurationId,
environmentConfigurationName,
environmentProfileId,
glossaryTerms,
lastDeployment,
projectId,
provider,
provisionedResources,
provisioningProperties,
status,
updatedAt,
userParameters
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: environments
  props:
    - name: domain_identifier
      value: "{{ domain_identifier }}"
      description: Required parameter for the environments resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the environments resource.
    - name: projectIdentifier
      value: "{{ projectIdentifier }}"
    - name: description
      value: "{{ description }}"
    - name: name
      value: "{{ name }}"
    - name: environmentProfileIdentifier
      value: "{{ environmentProfileIdentifier }}"
    - name: userParameters
      value:
        - name: "{{ name }}"
          value: "{{ value }}"
    - name: glossaryTerms
      value:
        - "{{ glossaryTerms }}"
    - name: environmentAccountIdentifier
      value: "{{ environmentAccountIdentifier }}"
    - name: environmentAccountRegion
      value: "{{ environmentAccountRegion }}"
    - name: environmentBlueprintIdentifier
      value: "{{ environmentBlueprintIdentifier }}"
    - name: deploymentOrder
      value: {{ deploymentOrder }}
    - name: environmentConfigurationId
      value: "{{ environmentConfigurationId }}"
    - name: environmentConfigurationName
      value: "{{ environmentConfigurationName }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="associate_environment_role"
    values={[
        { label: 'associate_environment_role', value: 'associate_environment_role' },
        { label: 'update_environment', value: 'update_environment' }
    ]}
>
<TabItem value="associate_environment_role">

Associates the environment role in Amazon DataZone.

```sql
UPDATE aws.datazone.environments
SET 
-- No updatable properties
WHERE 
domain_identifier = '{{ domain_identifier }}' --required
AND environment_identifier = '{{ environment_identifier }}' --required
AND environment_role_arn = '{{ environment_role_arn }}' --required
AND region = '{{ region }}' --required;
```
</TabItem>
<TabItem value="update_environment">

Updates the specified environment in Amazon DataZone.

```sql
UPDATE aws.datazone.environments
SET 
name = '{{ name }}',
description = '{{ description }}',
glossaryTerms = '{{ glossaryTerms }}',
blueprintVersion = '{{ blueprintVersion }}',
userParameters = '{{ userParameters }}',
environmentConfigurationName = '{{ environmentConfigurationName }}'
WHERE 
domain_identifier = '{{ domain_identifier }}' --required
AND identifier = '{{ identifier }}' --required
AND region = '{{ region }}' --required
RETURNING
id,
name,
awsAccountId,
awsAccountRegion,
createdAt,
createdBy,
deploymentProperties,
description,
domainId,
environmentActions,
environmentBlueprintId,
environmentConfigurationId,
environmentConfigurationName,
environmentProfileId,
glossaryTerms,
lastDeployment,
projectId,
provider,
provisionedResources,
provisioningProperties,
status,
updatedAt,
userParameters;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_environment"
    values={[
        { label: 'delete_environment', value: 'delete_environment' }
    ]}
>
<TabItem value="delete_environment">

Deletes an environment in Amazon DataZone.

```sql
DELETE FROM aws.datazone.environments
WHERE domain_identifier = '{{ domain_identifier }}' --required
AND identifier = '{{ identifier }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="disassociate_environment_role"
    values={[
        { label: 'disassociate_environment_role', value: 'disassociate_environment_role' }
    ]}
>
<TabItem value="disassociate_environment_role">

Disassociates the environment role in Amazon DataZone.

```sql
EXEC aws.datazone.environments.disassociate_environment_role 
@domain_identifier='{{ domain_identifier }}' --required, 
@environment_identifier='{{ environment_identifier }}' --required, 
@environment_role_arn='{{ environment_role_arn }}' --required, 
@region='{{ region }}' --required
;
```
</TabItem>
</Tabs>
