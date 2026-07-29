--- 
title: firewall_domain_lists
hide_title: false
hide_table_of_contents: false
keywords:
  - firewall_domain_lists
  - route53resolver
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

Creates, updates, deletes, gets or lists a <code>firewall_domain_lists</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="firewall_domain_lists" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.route53resolver.firewall_domain_lists" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_firewall_domain_list"
    values={[
        { label: 'get_firewall_domain_list', value: 'get_firewall_domain_list' },
        { label: 'list_firewall_domain_lists', value: 'list_firewall_domain_lists' }
    ]}
>
<TabItem value="get_firewall_domain_list">

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
    <td>The Amazon Resource Name (ARN) of the firewall domain list.</td>
</tr>
<tr>
    <td><CopyableCode code="creation_time" /></td>
    <td><code>string</code></td>
    <td>The date and time that the domain list was created, in Unix time format and Coordinated Universal Time (UTC).</td>
</tr>
<tr>
    <td><CopyableCode code="creator_request_id" /></td>
    <td><code>string</code></td>
    <td>A unique string defined by you to identify the request. This allows you to retry failed requests without the risk of running the operation twice. This can be any unique string, for example, a timestamp.</td>
</tr>
<tr>
    <td><CopyableCode code="domain_count" /></td>
    <td><code>integer</code></td>
    <td>The number of domain names that are specified in the domain list.</td>
</tr>
<tr>
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The ID of the domain list.</td>
</tr>
<tr>
    <td><CopyableCode code="managed_owner_name" /></td>
    <td><code>string</code></td>
    <td>The owner of the list, used only for lists that are not managed by you. For example, the managed domain list AWSManagedDomainsMalwareDomainList has the managed owner name Route 53 Resolver DNS Firewall.</td>
</tr>
<tr>
    <td><CopyableCode code="modification_time" /></td>
    <td><code>string</code></td>
    <td>The date and time that the domain list was last modified, in Unix time format and Coordinated Universal Time (UTC).</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the domain list. (pattern: &lt;code&gt;(?!^&#91;0-9&#93;+$)(&#91;a-zA-Z0-9\-_' '&#93;+)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the domain list. (COMPLETE, COMPLETE_IMPORT_FAILED, IMPORTING, DELETING, UPDATING)</td>
</tr>
<tr>
    <td><CopyableCode code="status_message" /></td>
    <td><code>string</code></td>
    <td>Additional information about the status of the list, if available.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_firewall_domain_lists">

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
    <td>The Amazon Resource Name (ARN) of the firewall domain list metadata.</td>
</tr>
<tr>
    <td><CopyableCode code="creator_request_id" /></td>
    <td><code>string</code></td>
    <td>A unique string defined by you to identify the request. This allows you to retry failed requests without the risk of running the operation twice. This can be any unique string, for example, a timestamp.</td>
</tr>
<tr>
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The ID of the domain list.</td>
</tr>
<tr>
    <td><CopyableCode code="managed_owner_name" /></td>
    <td><code>string</code></td>
    <td>The owner of the list, used only for lists that are not managed by you. For example, the managed domain list AWSManagedDomainsMalwareDomainList has the managed owner name Route 53 Resolver DNS Firewall.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the domain list. (pattern: &lt;code&gt;(?!^&#91;0-9&#93;+$)(&#91;a-zA-Z0-9\-_' '&#93;+)&lt;/code&gt;)</td>
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
    <td><a href="#get_firewall_domain_list"><CopyableCode code="get_firewall_domain_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves the specified firewall domain list.</td>
</tr>
<tr>
    <td><a href="#list_firewall_domain_lists"><CopyableCode code="list_firewall_domain_lists" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves the firewall domain lists that you have defined. For each firewall domain list, you can retrieve the domains that are defined for a list by calling ListFirewallDomains. A single call to this list operation might return only a partial list of the domain lists. For information, see MaxResults.</td>
</tr>
<tr>
    <td><a href="#create_firewall_domain_list"><CopyableCode code="create_firewall_domain_list" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-CreatorRequestId"><code>CreatorRequestId</code></a></td>
    <td></td>
    <td>Creates an empty firewall domain list for use in DNS Firewall rules. You can populate the domains for the new list with a file, using ImportFirewallDomains, or with domain strings, using UpdateFirewallDomains.</td>
</tr>
<tr>
    <td><a href="#delete_firewall_domain_list"><CopyableCode code="delete_firewall_domain_list" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the specified domain list.</td>
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
    defaultValue="get_firewall_domain_list"
    values={[
        { label: 'get_firewall_domain_list', value: 'get_firewall_domain_list' },
        { label: 'list_firewall_domain_lists', value: 'list_firewall_domain_lists' }
    ]}
>
<TabItem value="get_firewall_domain_list">

Retrieves the specified firewall domain list.

```sql
SELECT
arn,
creation_time,
creator_request_id,
domain_count,
id,
managed_owner_name,
modification_time,
name,
status,
status_message
FROM aws.route53resolver.firewall_domain_lists
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_firewall_domain_lists">

Retrieves the firewall domain lists that you have defined. For each firewall domain list, you can retrieve the domains that are defined for a list by calling ListFirewallDomains. A single call to this list operation might return only a partial list of the domain lists. For information, see MaxResults.

```sql
SELECT
arn,
creator_request_id,
id,
managed_owner_name,
name
FROM aws.route53resolver.firewall_domain_lists
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_firewall_domain_list"
    values={[
        { label: 'create_firewall_domain_list', value: 'create_firewall_domain_list' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_firewall_domain_list">

Creates an empty firewall domain list for use in DNS Firewall rules. You can populate the domains for the new list with a file, using ImportFirewallDomains, or with domain strings, using UpdateFirewallDomains.

```sql
INSERT INTO aws.route53resolver.firewall_domain_lists (
CreatorRequestId,
Name,
Tags,
region
)
SELECT 
'{{ CreatorRequestId }}' /* required */,
'{{ Name }}',
'{{ Tags }}',
'{{ region }}'
RETURNING
firewall_domain_list
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: firewall_domain_lists
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the firewall_domain_lists resource.
    - name: CreatorRequestId
      value: "{{ CreatorRequestId }}"
      description: |
        A unique string that identifies the request and that allows you to retry failed requests without the risk of running the operation twice. CreatorRequestId can be any unique string, for example, a date/time stamp.
    - name: Name
      value: "{{ Name }}"
      description: |
        A name that lets you identify the domain list to manage and use it.
    - name: Tags
      description: |
        A list of the tag keys and values that you want to associate with the domain list.
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_firewall_domain_list"
    values={[
        { label: 'delete_firewall_domain_list', value: 'delete_firewall_domain_list' }
    ]}
>
<TabItem value="delete_firewall_domain_list">

Deletes the specified domain list.

```sql
DELETE FROM aws.route53resolver.firewall_domain_lists
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
