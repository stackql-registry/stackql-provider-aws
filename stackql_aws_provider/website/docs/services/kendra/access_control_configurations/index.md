--- 
title: access_control_configurations
hide_title: false
hide_table_of_contents: false
keywords:
  - access_control_configurations
  - kendra
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

Creates, updates, deletes, gets or lists an <code>access_control_configurations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="access_control_configurations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.kendra.access_control_configurations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_access_control_configuration"
    values={[
        { label: 'describe_access_control_configuration', value: 'describe_access_control_configuration' }
    ]}
>
<TabItem value="describe_access_control_configuration">

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
    <td><CopyableCode code="access_control_list" /></td>
    <td><code>array</code></td>
    <td>Information on principals (users and/or groups) and which documents they should have access to. This is useful for user context filtering, where search results are filtered based on the user or their group access to documents.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description for the access control configuration. (pattern: &lt;code&gt;^\P&#123;C&#125;*$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="error_message" /></td>
    <td><code>string</code></td>
    <td>The error message containing details if there are issues processing the access control configuration. (pattern: &lt;code&gt;^\P&#123;C&#125;*$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="hierarchical_access_control_list" /></td>
    <td><code>array</code></td>
    <td>The list of principal lists that define the hierarchy for which documents users should have access to.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name for the access control configuration. (pattern: &lt;code&gt;&#91;\S\s&#93;*&lt;/code&gt;)</td>
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
    <td><a href="#describe_access_control_configuration"><CopyableCode code="describe_access_control_configuration" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets information about an access control configuration that you created for your documents in an index. This includes user and group access information for your documents. This is useful for user context filtering, where search results are filtered based on the user or their group access to documents.</td>
</tr>
<tr>
    <td><a href="#create_access_control_configuration"><CopyableCode code="create_access_control_configuration" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-IndexId"><code>IndexId</code></a></td>
    <td></td>
    <td>Creates an access configuration for your documents. This includes user and group access information for your documents. This is useful for user context filtering, where search results are filtered based on the user or their group access to documents. You can use this to re-configure your existing document level access control without indexing all of your documents again. For example, your index contains top-secret company documents that only certain employees or users should access. One of these users leaves the company or switches to a team that should be blocked from accessing top-secret documents. The user still has access to top-secret documents because the user had access when your documents were previously indexed. You can create a specific access control configuration for the user with deny access. You can later update the access control configuration to allow access if the user returns to the company and re-joins the 'top-secret' team. You can re-configure access control for your documents as circumstances change. To apply your access control configuration to certain documents, you call the BatchPutDocument API with the AccessControlConfigurationId included in the Document object. If you use an S3 bucket as a data source, you update the .metadata.json with the AccessControlConfigurationId and synchronize your data source. Amazon Kendra currently only supports access control configuration for S3 data sources and documents indexed using the BatchPutDocument API. You can't configure access control using CreateAccessControlConfiguration for an Amazon Kendra Gen AI Enterprise Edition index. Amazon Kendra will return a ValidationException error for a Gen_AI_ENTERPRISE_EDITION index.</td>
</tr>
<tr>
    <td><a href="#update_access_control_configuration"><CopyableCode code="update_access_control_configuration" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-IndexId"><code>IndexId</code></a></td>
    <td></td>
    <td>Updates an access control configuration for your documents in an index. This includes user and group access information for your documents. This is useful for user context filtering, where search results are filtered based on the user or their group access to documents. You can update an access control configuration you created without indexing all of your documents again. For example, your index contains top-secret company documents that only certain employees or users should access. You created an 'allow' access control configuration for one user who recently joined the 'top-secret' team, switching from a team with 'deny' access to top-secret documents. However, the user suddenly returns to their previous team and should no longer have access to top secret documents. You can update the access control configuration to re-configure access control for your documents as circumstances change. You call the BatchPutDocument API to apply the updated access control configuration, with the AccessControlConfigurationId included in the Document object. If you use an S3 bucket as a data source, you synchronize your data source to apply the AccessControlConfigurationId in the .metadata.json file. Amazon Kendra currently only supports access control configuration for S3 data sources and documents indexed using the BatchPutDocument API. You can't configure access control using CreateAccessControlConfiguration for an Amazon Kendra Gen AI Enterprise Edition index. Amazon Kendra will return a ValidationException error for a Gen_AI_ENTERPRISE_EDITION index.</td>
</tr>
<tr>
    <td><a href="#delete_access_control_configuration"><CopyableCode code="delete_access_control_configuration" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes an access control configuration that you created for your documents in an index. This includes user and group access information for your documents. This is useful for user context filtering, where search results are filtered based on the user or their group access to documents.</td>
</tr>
<tr>
    <td><a href="#list_access_control_configurations"><CopyableCode code="list_access_control_configurations" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-IndexId"><code>IndexId</code></a></td>
    <td></td>
    <td>Lists one or more access control configurations for an index. This includes user and group access information for your documents. This is useful for user context filtering, where search results are filtered based on the user or their group access to documents.</td>
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
    defaultValue="describe_access_control_configuration"
    values={[
        { label: 'describe_access_control_configuration', value: 'describe_access_control_configuration' }
    ]}
>
<TabItem value="describe_access_control_configuration">

Gets information about an access control configuration that you created for your documents in an index. This includes user and group access information for your documents. This is useful for user context filtering, where search results are filtered based on the user or their group access to documents.

```sql
SELECT
access_control_list,
description,
error_message,
hierarchical_access_control_list,
name
FROM aws.kendra.access_control_configurations
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_access_control_configuration"
    values={[
        { label: 'create_access_control_configuration', value: 'create_access_control_configuration' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_access_control_configuration">

Creates an access configuration for your documents. This includes user and group access information for your documents. This is useful for user context filtering, where search results are filtered based on the user or their group access to documents. You can use this to re-configure your existing document level access control without indexing all of your documents again. For example, your index contains top-secret company documents that only certain employees or users should access. One of these users leaves the company or switches to a team that should be blocked from accessing top-secret documents. The user still has access to top-secret documents because the user had access when your documents were previously indexed. You can create a specific access control configuration for the user with deny access. You can later update the access control configuration to allow access if the user returns to the company and re-joins the 'top-secret' team. You can re-configure access control for your documents as circumstances change. To apply your access control configuration to certain documents, you call the BatchPutDocument API with the AccessControlConfigurationId included in the Document object. If you use an S3 bucket as a data source, you update the .metadata.json with the AccessControlConfigurationId and synchronize your data source. Amazon Kendra currently only supports access control configuration for S3 data sources and documents indexed using the BatchPutDocument API. You can't configure access control using CreateAccessControlConfiguration for an Amazon Kendra Gen AI Enterprise Edition index. Amazon Kendra will return a ValidationException error for a Gen_AI_ENTERPRISE_EDITION index.

```sql
INSERT INTO aws.kendra.access_control_configurations (
IndexId,
Name,
Description,
AccessControlList,
HierarchicalAccessControlList,
ClientToken,
region
)
SELECT 
'{{ IndexId }}' /* required */,
'{{ Name }}',
'{{ Description }}',
'{{ AccessControlList }}',
'{{ HierarchicalAccessControlList }}',
'{{ ClientToken }}',
'{{ region }}'
RETURNING
id
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: access_control_configurations
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the access_control_configurations resource.
    - name: IndexId
      value: "{{ IndexId }}"
      description: |
        The identifier of the index to create an access control configuration for your documents.
    - name: Name
      value: "{{ Name }}"
      description: |
        A name for the access control configuration.
    - name: Description
      value: "{{ Description }}"
      description: |
        A description for the access control configuration.
    - name: AccessControlList
      description: |
        Information on principals (users and/or groups) and which documents they should have access to. This is useful for user context filtering, where search results are filtered based on the user or their group access to documents.
      value:
        - Name: "{{ Name }}"
          Type: "{{ Type }}"
          Access: "{{ Access }}"
          DataSourceId: "{{ DataSourceId }}"
    - name: HierarchicalAccessControlList
      description: |
        The list of principal lists that define the hierarchy for which documents users should have access to.
      value:
        - PrincipalList: "{{ PrincipalList }}"
    - name: ClientToken
      value: "{{ ClientToken }}"
      description: |
        A token that you provide to identify the request to create an access control configuration. Multiple calls to the CreateAccessControlConfiguration API with the same client token will create only one access control configuration.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_access_control_configuration"
    values={[
        { label: 'update_access_control_configuration', value: 'update_access_control_configuration' }
    ]}
>
<TabItem value="update_access_control_configuration">

Updates an access control configuration for your documents in an index. This includes user and group access information for your documents. This is useful for user context filtering, where search results are filtered based on the user or their group access to documents. You can update an access control configuration you created without indexing all of your documents again. For example, your index contains top-secret company documents that only certain employees or users should access. You created an 'allow' access control configuration for one user who recently joined the 'top-secret' team, switching from a team with 'deny' access to top-secret documents. However, the user suddenly returns to their previous team and should no longer have access to top secret documents. You can update the access control configuration to re-configure access control for your documents as circumstances change. You call the BatchPutDocument API to apply the updated access control configuration, with the AccessControlConfigurationId included in the Document object. If you use an S3 bucket as a data source, you synchronize your data source to apply the AccessControlConfigurationId in the .metadata.json file. Amazon Kendra currently only supports access control configuration for S3 data sources and documents indexed using the BatchPutDocument API. You can't configure access control using CreateAccessControlConfiguration for an Amazon Kendra Gen AI Enterprise Edition index. Amazon Kendra will return a ValidationException error for a Gen_AI_ENTERPRISE_EDITION index.

```sql
UPDATE aws.kendra.access_control_configurations
SET 
IndexId = '{{ IndexId }}',
Id = '{{ Id }}',
Name = '{{ Name }}',
Description = '{{ Description }}',
AccessControlList = '{{ AccessControlList }}',
HierarchicalAccessControlList = '{{ HierarchicalAccessControlList }}'
WHERE 
region = '{{ region }}' --required
AND IndexId = '{{ IndexId }}' --required;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_access_control_configuration"
    values={[
        { label: 'delete_access_control_configuration', value: 'delete_access_control_configuration' }
    ]}
>
<TabItem value="delete_access_control_configuration">

Deletes an access control configuration that you created for your documents in an index. This includes user and group access information for your documents. This is useful for user context filtering, where search results are filtered based on the user or their group access to documents.

```sql
DELETE FROM aws.kendra.access_control_configurations
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="list_access_control_configurations"
    values={[
        { label: 'list_access_control_configurations', value: 'list_access_control_configurations' }
    ]}
>
<TabItem value="list_access_control_configurations">

Lists one or more access control configurations for an index. This includes user and group access information for your documents. This is useful for user context filtering, where search results are filtered based on the user or their group access to documents.

```sql
EXEC aws.kendra.access_control_configurations.list_access_control_configurations 
@region='{{ region }}' --required 
@@json=
'{
"IndexId": "{{ IndexId }}", 
"NextToken": "{{ NextToken }}", 
"MaxResults": {{ MaxResults }}
}'
;
```
</TabItem>
</Tabs>
