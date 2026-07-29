--- 
title: environments
hide_title: false
hide_table_of_contents: false
keywords:
  - environments
  - finspace
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
<tr><td><b>Id</b></td><td><CopyableCode code="aws.finspace.environments" /></td></tr>
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
    <td>The name of the FinSpace environment. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9&#93;&#91;a-zA-Z0-9-&#93;*&#91;a-zA-Z0-9&#93;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="aws_account_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the AWS account in which the FinSpace environment is created. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9&#93;&#123;1,26&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="dedicated_service_account_id" /></td>
    <td><code>string</code></td>
    <td>The AWS account ID of the dedicated service account associated with your FinSpace environment. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9&#93;&#123;1,26&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the FinSpace environment. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9. &#93;&#123;1,1000&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="environment_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of your FinSpace environment. (pattern: &lt;code&gt;^arn:aws:finspace:&#91;A-Za-z0-9_/.-&#93;&#123;0,63&#125;:\d+:environment/&#91;0-9A-Za-z_-&#93;&#123;1,128&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="environment_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the FinSpace environment. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9&#93;&#123;1,26&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="environment_url" /></td>
    <td><code>string</code></td>
    <td>The sign-in URL for the web application of your FinSpace environment. (pattern: &lt;code&gt;^https?:​//&#91;-a-zA-Z0-9+&@#/%?=~_|!:,.;&#93;*&#91;-a-zA-Z0-9+&@#/%=~_|&#93;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="federation_mode" /></td>
    <td><code>string</code></td>
    <td>The authentication mode for the environment. (FEDERATED, LOCAL)</td>
</tr>
<tr>
    <td><CopyableCode code="federation_parameters" /></td>
    <td><code>object</code></td>
    <td>Configuration information when authentication mode is FEDERATED.</td>
</tr>
<tr>
    <td><CopyableCode code="kms_key_id" /></td>
    <td><code>string</code></td>
    <td>The KMS key id used to encrypt in the FinSpace environment. (pattern: &lt;code&gt;^&#91;a-zA-Z-0-9-:\/&#93;*$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="sage_maker_studio_domain_url" /></td>
    <td><code>string</code></td>
    <td>The URL of the integrated FinSpace notebook environment in your web application. (pattern: &lt;code&gt;^&#91;a-zA-Z-0-9-:\/.&#93;*$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The current status of creation of the FinSpace environment. (CREATE_REQUESTED, CREATING, CREATED, DELETE_REQUESTED, DELETING, DELETED, FAILED_CREATION, RETRY_DELETION, FAILED_DELETION, UPDATE_NETWORK_REQUESTED, UPDATING_NETWORK, FAILED_UPDATING_NETWORK, SUSPENDED)</td>
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
    <td><CopyableCode code="environments" /></td>
    <td><code>array</code></td>
    <td>A list of all of your FinSpace environments.</td>
</tr>
<tr>
    <td><CopyableCode code="next_token" /></td>
    <td><code>string</code></td>
    <td>A token that you can use in a subsequent call to retrieve the next set of results. (pattern: &lt;code&gt;.*&lt;/code&gt;)</td>
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
    <td>Returns the FinSpace environment object.</td>
</tr>
<tr>
    <td><a href="#list_environments"><CopyableCode code="list_environments" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a></td>
    <td>A list of all of your FinSpace environments.</td>
</tr>
<tr>
    <td><a href="#create_environment"><CopyableCode code="create_environment" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-name"><code>name</code></a></td>
    <td></td>
    <td>Create a new FinSpace environment.</td>
</tr>
<tr>
    <td><a href="#update_environment"><CopyableCode code="update_environment" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-environment_id"><code>environment_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Update your FinSpace environment.</td>
</tr>
<tr>
    <td><a href="#delete_environment"><CopyableCode code="delete_environment" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-environment_id"><code>environment_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Delete an FinSpace environment.</td>
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
<tr id="parameter-environment_id">
    <td><CopyableCode code="environment_id" /></td>
    <td><code>string</code></td>
    <td>The identifier for the FinSpace environment.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return in this request.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>A token generated by FinSpace that specifies where to continue pagination if a previous request was truncated. To get the next set of pages, pass in the nextTokennextToken value from the response object of the previous page call.</td>
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

Returns the FinSpace environment object.

```sql
SELECT
name,
aws_account_id,
dedicated_service_account_id,
description,
environment_arn,
environment_id,
environment_url,
federation_mode,
federation_parameters,
kms_key_id,
sage_maker_studio_domain_url,
status
FROM aws.finspace.environments
WHERE environment_id = '{{ environment_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_environments">

A list of all of your FinSpace environments.

```sql
SELECT
environments,
next_token
FROM aws.finspace.environments
WHERE region = '{{ region }}' -- required
AND nextToken = '{{ nextToken }}'
AND maxResults = '{{ maxResults }}'
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

Create a new FinSpace environment.

```sql
INSERT INTO aws.finspace.environments (
name,
description,
kmsKeyId,
tags,
federationMode,
federationParameters,
superuserParameters,
dataBundles,
region
)
SELECT 
'{{ name }}' /* required */,
'{{ description }}',
'{{ kmsKeyId }}',
'{{ tags }}',
'{{ federationMode }}',
'{{ federationParameters }}',
'{{ superuserParameters }}',
'{{ dataBundles }}',
'{{ region }}'
RETURNING
environment_arn,
environment_id,
environment_url
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
    - name: name
      value: "{{ name }}"
    - name: description
      value: "{{ description }}"
    - name: kmsKeyId
      value: "{{ kmsKeyId }}"
    - name: tags
      value: "{{ tags }}"
    - name: federationMode
      value: "{{ federationMode }}"
      valid_values: ['FEDERATED', 'LOCAL']
    - name: federationParameters
      description: |
        Configuration information when authentication mode is FEDERATED.
      value:
        samlMetadataDocument: "{{ samlMetadataDocument }}"
        samlMetadataURL: "{{ samlMetadataURL }}"
        applicationCallBackURL: "{{ applicationCallBackURL }}"
        federationURN: "{{ federationURN }}"
        federationProviderName: "{{ federationProviderName }}"
        attributeMap: "{{ attributeMap }}"
    - name: superuserParameters
      description: |
        Configuration information for the superuser.
      value:
        emailAddress: "{{ emailAddress }}"
        firstName: "{{ firstName }}"
        lastName: "{{ lastName }}"
    - name: dataBundles
      value:
        - "{{ dataBundles }}"
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

Update your FinSpace environment.

```sql
UPDATE aws.finspace.environments
SET 
name = '{{ name }}',
description = '{{ description }}',
federationMode = '{{ federationMode }}',
federationParameters = '{{ federationParameters }}'
WHERE 
environment_id = '{{ environment_id }}' --required
AND region = '{{ region }}' --required
RETURNING
environment;
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

Delete an FinSpace environment.

```sql
DELETE FROM aws.finspace.environments
WHERE environment_id = '{{ environment_id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
