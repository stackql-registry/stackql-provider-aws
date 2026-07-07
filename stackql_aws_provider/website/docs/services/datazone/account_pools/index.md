--- 
title: account_pools
hide_title: false
hide_table_of_contents: false
keywords:
  - account_pools
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

Creates, updates, deletes, gets or lists an <code>account_pools</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="account_pools" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.datazone.account_pools" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_account_pool"
    values={[
        { label: 'get_account_pool', value: 'get_account_pool' },
        { label: 'list_account_pools', value: 'list_account_pools' }
    ]}
>
<TabItem value="get_account_pool">

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
    <td>The ID of the account pool. (pattern: &lt;code&gt;&#91;a-zA-Z0-9_-&#93;&#123;1,36&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the account pool. (pattern: &lt;code&gt;&#91;\w -&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="accountSource" /></td>
    <td><code>object</code></td>
    <td>The source of accounts for the account pool. In the current release, it's either a static list of accounts provided by the customer or a custom Amazon Web Services Lambda handler.</td>
</tr>
<tr>
    <td><CopyableCode code="createdAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp at which the account pool was created.</td>
</tr>
<tr>
    <td><CopyableCode code="createdBy" /></td>
    <td><code>string</code></td>
    <td>The user who created the account pool.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the account pool.</td>
</tr>
<tr>
    <td><CopyableCode code="domainId" /></td>
    <td><code>string</code></td>
    <td>The ID of the domain in which the account pool lives whose details are to be displayed. (pattern: &lt;code&gt;dzd&#91;-_&#93;&#91;a-zA-Z0-9_-&#93;&#123;1,36&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="domainUnitId" /></td>
    <td><code>string</code></td>
    <td>The domain unit ID of the account pool. (pattern: &lt;code&gt;&#91;a-z0-9_\-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="lastUpdatedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp at which the account pool was last updated.</td>
</tr>
<tr>
    <td><CopyableCode code="resolutionStrategy" /></td>
    <td><code>string</code></td>
    <td>The mechanism used to resolve the account selection from the account pool. (MANUAL)</td>
</tr>
<tr>
    <td><CopyableCode code="updatedBy" /></td>
    <td><code>string</code></td>
    <td>The user who last updated the account pool.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_account_pools">

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
    <td>The ID of the account pool. (pattern: &lt;code&gt;&#91;a-zA-Z0-9_-&#93;&#123;1,36&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the account pool. (pattern: &lt;code&gt;&#91;\w -&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="createdBy" /></td>
    <td><code>string</code></td>
    <td>The user who created the account pool.</td>
</tr>
<tr>
    <td><CopyableCode code="domainId" /></td>
    <td><code>string</code></td>
    <td>The ID of the domain. (pattern: &lt;code&gt;dzd&#91;-_&#93;&#91;a-zA-Z0-9_-&#93;&#123;1,36&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="domainUnitId" /></td>
    <td><code>string</code></td>
    <td>The ID of the domain unit. (pattern: &lt;code&gt;&#91;a-z0-9_\-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="resolutionStrategy" /></td>
    <td><code>string</code></td>
    <td>The mechanism used to resolve the account selection from the account pool. (MANUAL)</td>
</tr>
<tr>
    <td><CopyableCode code="updatedBy" /></td>
    <td><code>string</code></td>
    <td>The user who updated the account pool.</td>
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
    <td><a href="#get_account_pool"><CopyableCode code="get_account_pool" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-domain_identifier"><code>domain_identifier</code></a>, <a href="#parameter-identifier"><code>identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets the details of the account pool.</td>
</tr>
<tr>
    <td><a href="#list_account_pools"><CopyableCode code="list_account_pools" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-domain_identifier"><code>domain_identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-name"><code>name</code></a>, <a href="#parameter-sortBy"><code>sortBy</code></a>, <a href="#parameter-sortOrder"><code>sortOrder</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a></td>
    <td>Lists existing account pools.</td>
</tr>
<tr>
    <td><a href="#create_account_pool"><CopyableCode code="create_account_pool" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-domain_identifier"><code>domain_identifier</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-resolutionStrategy"><code>resolutionStrategy</code></a>, <a href="#parameter-accountSource"><code>accountSource</code></a></td>
    <td></td>
    <td>Creates an account pool.</td>
</tr>
<tr>
    <td><a href="#update_account_pool"><CopyableCode code="update_account_pool" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-domain_identifier"><code>domain_identifier</code></a>, <a href="#parameter-identifier"><code>identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates the account pool.</td>
</tr>
<tr>
    <td><a href="#delete_account_pool"><CopyableCode code="delete_account_pool" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-domain_identifier"><code>domain_identifier</code></a>, <a href="#parameter-identifier"><code>identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes an account pool.</td>
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
    <td>The ID of the domain where the account pool is deleted.</td>
</tr>
<tr id="parameter-identifier">
    <td><CopyableCode code="identifier" /></td>
    <td><code>string</code></td>
    <td>The ID of the account pool to be deleted.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of account pools to return in a single call to ListAccountPools. When the number of account pools to be listed is greater than the value of MaxResults, the response contains a NextToken value that you can use in a subsequent call to ListAccountPools to list the next set of account pools.</td>
</tr>
<tr id="parameter-name">
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the account pool to be listed.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>When the number of account pools is greater than the default value for the MaxResults parameter, or if you explicitly specify a value for MaxResults that is less than the number of account pools, the response includes a pagination token named NextToken. You can specify this NextToken value in a subsequent call to ListAccountPools to list the next set of account pools.</td>
</tr>
<tr id="parameter-sortBy">
    <td><CopyableCode code="sortBy" /></td>
    <td><code>string</code></td>
    <td>The sort by mechanism in which the existing account pools are to be listed.</td>
</tr>
<tr id="parameter-sortOrder">
    <td><CopyableCode code="sortOrder" /></td>
    <td><code>string</code></td>
    <td>The sort order in which the existing account pools are to be listed.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_account_pool"
    values={[
        { label: 'get_account_pool', value: 'get_account_pool' },
        { label: 'list_account_pools', value: 'list_account_pools' }
    ]}
>
<TabItem value="get_account_pool">

Gets the details of the account pool.

```sql
SELECT
id,
name,
accountSource,
createdAt,
createdBy,
description,
domainId,
domainUnitId,
lastUpdatedAt,
resolutionStrategy,
updatedBy
FROM aws.datazone.account_pools
WHERE domain_identifier = '{{ domain_identifier }}' -- required
AND identifier = '{{ identifier }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_account_pools">

Lists existing account pools.

```sql
SELECT
id,
name,
createdBy,
domainId,
domainUnitId,
resolutionStrategy,
updatedBy
FROM aws.datazone.account_pools
WHERE domain_identifier = '{{ domain_identifier }}' -- required
AND region = '{{ region }}' -- required
AND name = '{{ name }}'
AND sortBy = '{{ sortBy }}'
AND sortOrder = '{{ sortOrder }}'
AND nextToken = '{{ nextToken }}'
AND maxResults = '{{ maxResults }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_account_pool"
    values={[
        { label: 'create_account_pool', value: 'create_account_pool' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_account_pool">

Creates an account pool.

```sql
INSERT INTO aws.datazone.account_pools (
name,
description,
resolutionStrategy,
accountSource,
domain_identifier,
region
)
SELECT 
'{{ name }}' /* required */,
'{{ description }}',
'{{ resolutionStrategy }}' /* required */,
'{{ accountSource }}' /* required */,
'{{ domain_identifier }}',
'{{ region }}'
RETURNING
id,
name,
accountSource,
createdAt,
createdBy,
description,
domainId,
domainUnitId,
lastUpdatedAt,
resolutionStrategy,
updatedBy
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: account_pools
  props:
    - name: domain_identifier
      value: "{{ domain_identifier }}"
      description: Required parameter for the account_pools resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the account_pools resource.
    - name: name
      value: "{{ name }}"
    - name: description
      value: "{{ description }}"
    - name: resolutionStrategy
      value: "{{ resolutionStrategy }}"
      valid_values: ['MANUAL']
    - name: accountSource
      description: |
        The source of accounts for the account pool. In the current release, it's either a static list of accounts provided by the customer or a custom Amazon Web Services Lambda handler.
      value:
        accounts:
          - awsAccountId: "{{ awsAccountId }}"
            supportedRegions: "{{ supportedRegions }}"
            awsAccountName: "{{ awsAccountName }}"
        customAccountPoolHandler:
          lambdaFunctionArn: "{{ lambdaFunctionArn }}"
          lambdaExecutionRoleArn: "{{ lambdaExecutionRoleArn }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_account_pool"
    values={[
        { label: 'update_account_pool', value: 'update_account_pool' }
    ]}
>
<TabItem value="update_account_pool">

Updates the account pool.

```sql
UPDATE aws.datazone.account_pools
SET 
name = '{{ name }}',
description = '{{ description }}',
resolutionStrategy = '{{ resolutionStrategy }}',
accountSource = '{{ accountSource }}'
WHERE 
domain_identifier = '{{ domain_identifier }}' --required
AND identifier = '{{ identifier }}' --required
AND region = '{{ region }}' --required
RETURNING
id,
name,
accountSource,
createdAt,
createdBy,
description,
domainId,
domainUnitId,
lastUpdatedAt,
resolutionStrategy,
updatedBy;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_account_pool"
    values={[
        { label: 'delete_account_pool', value: 'delete_account_pool' }
    ]}
>
<TabItem value="delete_account_pool">

Deletes an account pool.

```sql
DELETE FROM aws.datazone.account_pools
WHERE domain_identifier = '{{ domain_identifier }}' --required
AND identifier = '{{ identifier }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
