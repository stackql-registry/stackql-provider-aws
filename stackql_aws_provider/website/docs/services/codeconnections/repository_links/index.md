--- 
title: repository_links
hide_title: false
hide_table_of_contents: false
keywords:
  - repository_links
  - codeconnections
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

Creates, updates, deletes, gets or lists a <code>repository_links</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="repository_links" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.codeconnections.repository_links" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_repository_link"
    values={[
        { label: 'get_repository_link', value: 'get_repository_link' },
        { label: 'list_repository_links', value: 'list_repository_links' }
    ]}
>
<TabItem value="get_repository_link">

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
    <td><CopyableCode code="connection_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the connection associated with the repository link. (pattern: &lt;code&gt;arn:aws(-&#91;\w&#93;+)*:.+:.+:&#91;0-9&#93;&#123;12&#125;:.+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="encryption_key_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the encryption key for the repository associated with the repository link. (pattern: &lt;code&gt;arn:aws(-&#91;\w&#93;+)*:kms:&#91;a-z\-0-9&#93;+:\d&#123;12&#125;:key/&#91;a-zA-Z0-9\-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="owner_id" /></td>
    <td><code>string</code></td>
    <td>The owner ID for the repository associated with the repository link, such as the owner ID in GitHub. (pattern: &lt;code&gt;^.*$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="provider_type" /></td>
    <td><code>string</code></td>
    <td>The provider type for the connection, such as GitHub, associated with the repository link. (Bitbucket, GitHub, GitHubEnterpriseServer, GitLab, GitLabSelfManaged, AzureDevOps)</td>
</tr>
<tr>
    <td><CopyableCode code="repository_link_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the repository link. (pattern: &lt;code&gt;^arn:aws(?:-&#91;a-z&#93;+)*:(codestar-connections|codeconnections):&#91;a-z\-0-9&#93;+:\d&#123;12&#125;:repository-link\/&#91;a-zA-Z0-9\-:/&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="repository_link_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the repository link. (pattern: &lt;code&gt;^&#91;0-9a-fA-F&#93;&#123;8&#125;\b-&#91;0-9a-fA-F&#93;&#123;4&#125;\b-&#91;0-9a-fA-F&#93;&#123;4&#125;\b-&#91;0-9a-fA-F&#93;&#123;4&#125;\b-&#91;0-9a-fA-F&#93;&#123;12&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="repository_name" /></td>
    <td><code>string</code></td>
    <td>The name of the repository associated with the repository link. (pattern: &lt;code&gt;^.*$&lt;/code&gt;)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_repository_links">

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
    <td><CopyableCode code="next_token" /></td>
    <td><code>string</code></td>
    <td>An enumeration token that allows the operation to batch the results of the operation. (pattern: &lt;code&gt;^.*$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="repository_links" /></td>
    <td><code>array</code></td>
    <td>Lists the repository links called by the list repository links operation.</td>
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
    <td><a href="#get_repository_link"><CopyableCode code="get_repository_link" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns details about a repository link. A repository link allows Git sync to monitor and sync changes from files in a specified Git repository.</td>
</tr>
<tr>
    <td><a href="#list_repository_links"><CopyableCode code="list_repository_links" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists the repository links created for connections in your account.</td>
</tr>
<tr>
    <td><a href="#create_repository_link"><CopyableCode code="create_repository_link" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ConnectionArn"><code>ConnectionArn</code></a>, <a href="#parameter-OwnerId"><code>OwnerId</code></a>, <a href="#parameter-RepositoryName"><code>RepositoryName</code></a></td>
    <td></td>
    <td>Creates a link to a specified external Git repository. A repository link allows Git sync to monitor and sync changes to files in a specified Git repository.</td>
</tr>
<tr>
    <td><a href="#update_repository_link"><CopyableCode code="update_repository_link" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-RepositoryLinkId"><code>RepositoryLinkId</code></a></td>
    <td></td>
    <td>Updates the association between your connection and a specified external Git repository. A repository link allows Git sync to monitor and sync changes to files in a specified Git repository.</td>
</tr>
<tr>
    <td><a href="#delete_repository_link"><CopyableCode code="delete_repository_link" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the association between your connection and a specified external Git repository.</td>
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
    defaultValue="get_repository_link"
    values={[
        { label: 'get_repository_link', value: 'get_repository_link' },
        { label: 'list_repository_links', value: 'list_repository_links' }
    ]}
>
<TabItem value="get_repository_link">

Returns details about a repository link. A repository link allows Git sync to monitor and sync changes from files in a specified Git repository.

```sql
SELECT
connection_arn,
encryption_key_arn,
owner_id,
provider_type,
repository_link_arn,
repository_link_id,
repository_name
FROM aws.codeconnections.repository_links
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_repository_links">

Lists the repository links created for connections in your account.

```sql
SELECT
next_token,
repository_links
FROM aws.codeconnections.repository_links
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_repository_link"
    values={[
        { label: 'create_repository_link', value: 'create_repository_link' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_repository_link">

Creates a link to a specified external Git repository. A repository link allows Git sync to monitor and sync changes to files in a specified Git repository.

```sql
INSERT INTO aws.codeconnections.repository_links (
ConnectionArn,
OwnerId,
RepositoryName,
EncryptionKeyArn,
Tags,
region
)
SELECT 
'{{ ConnectionArn }}' /* required */,
'{{ OwnerId }}' /* required */,
'{{ RepositoryName }}' /* required */,
'{{ EncryptionKeyArn }}',
'{{ Tags }}',
'{{ region }}'
RETURNING
repository_link_info
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: repository_links
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the repository_links resource.
    - name: ConnectionArn
      value: "{{ ConnectionArn }}"
      description: |
        The Amazon Resource Name (ARN) of the connection to be associated with the repository link.
    - name: OwnerId
      value: "{{ OwnerId }}"
      description: |
        The owner ID for the repository associated with a specific sync configuration, such as the owner ID in GitHub.
    - name: RepositoryName
      value: "{{ RepositoryName }}"
      description: |
        The name of the repository to be associated with the repository link.
    - name: EncryptionKeyArn
      value: "{{ EncryptionKeyArn }}"
      description: |
        The Amazon Resource Name (ARN) encryption key for the repository to be associated with the repository link.
    - name: Tags
      description: |
        The tags for the repository to be associated with the repository link.
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_repository_link"
    values={[
        { label: 'update_repository_link', value: 'update_repository_link' }
    ]}
>
<TabItem value="update_repository_link">

Updates the association between your connection and a specified external Git repository. A repository link allows Git sync to monitor and sync changes to files in a specified Git repository.

```sql
UPDATE aws.codeconnections.repository_links
SET 
ConnectionArn = '{{ ConnectionArn }}',
EncryptionKeyArn = '{{ EncryptionKeyArn }}',
RepositoryLinkId = '{{ RepositoryLinkId }}'
WHERE 
region = '{{ region }}' --required
AND RepositoryLinkId = '{{ RepositoryLinkId }}' --required
RETURNING
repository_link_info;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_repository_link"
    values={[
        { label: 'delete_repository_link', value: 'delete_repository_link' }
    ]}
>
<TabItem value="delete_repository_link">

Deletes the association between your connection and a specified external Git repository.

```sql
DELETE FROM aws.codeconnections.repository_links
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
