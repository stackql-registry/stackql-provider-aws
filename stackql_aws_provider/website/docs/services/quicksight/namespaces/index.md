--- 
title: namespaces
hide_title: false
hide_table_of_contents: false
keywords:
  - namespaces
  - quicksight
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

Creates, updates, deletes, gets or lists a <code>namespaces</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="namespaces" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.quicksight.namespaces" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_namespace"
    values={[
        { label: 'describe_namespace', value: 'describe_namespace' },
        { label: 'list_namespaces', value: 'list_namespaces' }
    ]}
>
<TabItem value="describe_namespace">

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
    <td><CopyableCode code="namespace" /></td>
    <td><code>object</code></td>
    <td>The information about the namespace that you're describing. The response includes the namespace ARN, name, Amazon Web Services Region, creation status, and identity store. DescribeNamespace also works for namespaces that are in the process of being created. For incomplete namespaces, this API operation lists the namespace error types and messages associated with the creation process.</td>
</tr>
<tr>
    <td><CopyableCode code="request_id" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services request ID for this operation.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>integer</code></td>
    <td>The HTTP status of the request.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_namespaces">

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
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The namespace ARN.</td>
</tr>
<tr>
    <td><CopyableCode code="capacity_region" /></td>
    <td><code>string</code></td>
    <td>The namespace Amazon Web Services Region.</td>
</tr>
<tr>
    <td><CopyableCode code="creation_status" /></td>
    <td><code>string</code></td>
    <td>The creation status of a namespace that is not yet completely created. (CREATED, CREATING, DELETING, RETRYABLE_FAILURE, NON_RETRYABLE_FAILURE)</td>
</tr>
<tr>
    <td><CopyableCode code="iam_identity_center_application_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) for the IAM Identity Center application.</td>
</tr>
<tr>
    <td><CopyableCode code="iam_identity_center_instance_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) for the IAM Identity Center instance.</td>
</tr>
<tr>
    <td><CopyableCode code="identity_store" /></td>
    <td><code>string</code></td>
    <td>The identity store used for the namespace. (QUICKSIGHT)</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the error. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9._-&#93;*$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="namespace_error" /></td>
    <td><code>object</code></td>
    <td>An error that occurred when the namespace was created.</td>
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
    <td><a href="#describe_namespace"><CopyableCode code="describe_namespace" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-aws_account_id"><code>aws_account_id</code></a>, <a href="#parameter-namespace"><code>namespace</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Describes the current namespace.</td>
</tr>
<tr>
    <td><a href="#list_namespaces"><CopyableCode code="list_namespaces" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-aws_account_id"><code>aws_account_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-next-token"><code>next-token</code></a>, <a href="#parameter-max-results"><code>max-results</code></a></td>
    <td>Lists the namespaces for the specified Amazon Web Services account. This operation doesn't list deleted namespaces.</td>
</tr>
<tr>
    <td><a href="#create_namespace"><CopyableCode code="create_namespace" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-aws_account_id"><code>aws_account_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-IdentityStore"><code>IdentityStore</code></a></td>
    <td></td>
    <td>(Enterprise edition only) Creates a new namespace for you to use with Amazon Quick Sight. A namespace allows you to isolate the Quick Sight users and groups that are registered for that namespace. Users that access the namespace can share assets only with other users or groups in the same namespace. They can't see users and groups in other namespaces. You can create a namespace after your Amazon Web Services account is subscribed to Quick Sight. The namespace must be unique within the Amazon Web Services account. By default, there is a limit of 100 namespaces per Amazon Web Services account. To increase your limit, create a ticket with Amazon Web Services Support.</td>
</tr>
<tr>
    <td><a href="#delete_namespace"><CopyableCode code="delete_namespace" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-aws_account_id"><code>aws_account_id</code></a>, <a href="#parameter-namespace"><code>namespace</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a namespace and the users and groups that are associated with the namespace. This is an asynchronous process. Assets including dashboards, analyses, datasets and data sources are not deleted. To delete these assets, you use the API operations for the relevant asset.</td>
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
<tr id="parameter-aws_account_id">
    <td><CopyableCode code="aws_account_id" /></td>
    <td><code>string</code></td>
    <td>The ID for the Amazon Web Services account that you want to delete the Quick Sight namespace from.</td>
</tr>
<tr id="parameter-namespace">
    <td><CopyableCode code="namespace" /></td>
    <td><code>string</code></td>
    <td>The namespace that you want to delete.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-max-results">
    <td><CopyableCode code="max-results" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return.</td>
</tr>
<tr id="parameter-next-token">
    <td><CopyableCode code="next-token" /></td>
    <td><code>string</code></td>
    <td>A unique pagination token that can be used in a subsequent request. You will receive a pagination token in the response body of a previous ListNameSpaces API call if there is more data that can be returned. To receive the data, make another ListNamespaces API call with the returned token to retrieve the next page of data. Each token is valid for 24 hours. If you try to make a ListNamespaces API call with an expired token, you will receive a HTTP 400 InvalidNextTokenException error.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_namespace"
    values={[
        { label: 'describe_namespace', value: 'describe_namespace' },
        { label: 'list_namespaces', value: 'list_namespaces' }
    ]}
>
<TabItem value="describe_namespace">

Describes the current namespace.

```sql
SELECT
namespace,
request_id,
status
FROM aws.quicksight.namespaces
WHERE aws_account_id = '{{ aws_account_id }}' -- required
AND namespace = '{{ namespace }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_namespaces">

Lists the namespaces for the specified Amazon Web Services account. This operation doesn't list deleted namespaces.

```sql
SELECT
arn,
capacity_region,
creation_status,
iam_identity_center_application_arn,
iam_identity_center_instance_arn,
identity_store,
name,
namespace_error
FROM aws.quicksight.namespaces
WHERE aws_account_id = '{{ aws_account_id }}' -- required
AND region = '{{ region }}' -- required
AND `next-token` = '{{ next-token }}'
AND `max-results` = '{{ max-results }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_namespace"
    values={[
        { label: 'create_namespace', value: 'create_namespace' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_namespace">

(Enterprise edition only) Creates a new namespace for you to use with Amazon Quick Sight. A namespace allows you to isolate the Quick Sight users and groups that are registered for that namespace. Users that access the namespace can share assets only with other users or groups in the same namespace. They can't see users and groups in other namespaces. You can create a namespace after your Amazon Web Services account is subscribed to Quick Sight. The namespace must be unique within the Amazon Web Services account. By default, there is a limit of 100 namespaces per Amazon Web Services account. To increase your limit, create a ticket with Amazon Web Services Support.

```sql
INSERT INTO aws.quicksight.namespaces (
Namespace,
IdentityStore,
Tags,
aws_account_id,
region
)
SELECT 
'{{ Namespace }}',
'{{ IdentityStore }}' /* required */,
'{{ Tags }}',
'{{ aws_account_id }}',
'{{ region }}'
RETURNING
arn,
capacity_region,
creation_status,
identity_store,
name,
request_id,
status
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: namespaces
  props:
    - name: aws_account_id
      value: "{{ aws_account_id }}"
      description: Required parameter for the namespaces resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the namespaces resource.
    - name: Namespace
      value: "{{ Namespace }}"
    - name: IdentityStore
      value: "{{ IdentityStore }}"
      valid_values: ['QUICKSIGHT']
    - name: Tags
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_namespace"
    values={[
        { label: 'delete_namespace', value: 'delete_namespace' }
    ]}
>
<TabItem value="delete_namespace">

Deletes a namespace and the users and groups that are associated with the namespace. This is an asynchronous process. Assets including dashboards, analyses, datasets and data sources are not deleted. To delete these assets, you use the API operations for the relevant asset.

```sql
DELETE FROM aws.quicksight.namespaces
WHERE aws_account_id = '{{ aws_account_id }}' --required
AND namespace = '{{ namespace }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
