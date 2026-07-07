--- 
title: conditional_forwarders
hide_title: false
hide_table_of_contents: false
keywords:
  - conditional_forwarders
  - ds
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

Creates, updates, deletes, gets or lists a <code>conditional_forwarders</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="conditional_forwarders" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ds.conditional_forwarders" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_conditional_forwarders"
    values={[
        { label: 'describe_conditional_forwarders', value: 'describe_conditional_forwarders' }
    ]}
>
<TabItem value="describe_conditional_forwarders">

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
    <td><CopyableCode code="ConditionalForwarders" /></td>
    <td><code>array</code></td>
    <td>The list of conditional forwarders that have been created.</td>
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
    <td><a href="#describe_conditional_forwarders"><CopyableCode code="describe_conditional_forwarders" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Obtains information about the conditional forwarders for this account. If no input parameters are provided for RemoteDomainNames, this request describes all conditional forwarders for the specified directory ID.</td>
</tr>
<tr>
    <td><a href="#create_conditional_forwarder"><CopyableCode code="create_conditional_forwarder" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-DirectoryId"><code>DirectoryId</code></a>, <a href="#parameter-RemoteDomainName"><code>RemoteDomainName</code></a></td>
    <td></td>
    <td>Creates a conditional forwarder associated with your Amazon Web Services directory. Conditional forwarders are required in order to set up a trust relationship with another domain. The conditional forwarder points to the trusted domain.</td>
</tr>
<tr>
    <td><a href="#update_conditional_forwarder"><CopyableCode code="update_conditional_forwarder" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-DirectoryId"><code>DirectoryId</code></a>, <a href="#parameter-RemoteDomainName"><code>RemoteDomainName</code></a></td>
    <td></td>
    <td>Updates a conditional forwarder that has been set up for your Amazon Web Services directory.</td>
</tr>
<tr>
    <td><a href="#delete_conditional_forwarder"><CopyableCode code="delete_conditional_forwarder" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a conditional forwarder that has been set up for your Amazon Web Services directory.</td>
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
    defaultValue="describe_conditional_forwarders"
    values={[
        { label: 'describe_conditional_forwarders', value: 'describe_conditional_forwarders' }
    ]}
>
<TabItem value="describe_conditional_forwarders">

Obtains information about the conditional forwarders for this account. If no input parameters are provided for RemoteDomainNames, this request describes all conditional forwarders for the specified directory ID.

```sql
SELECT
ConditionalForwarders
FROM aws.ds.conditional_forwarders
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_conditional_forwarder"
    values={[
        { label: 'create_conditional_forwarder', value: 'create_conditional_forwarder' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_conditional_forwarder">

Creates a conditional forwarder associated with your Amazon Web Services directory. Conditional forwarders are required in order to set up a trust relationship with another domain. The conditional forwarder points to the trusted domain.

```sql
INSERT INTO aws.ds.conditional_forwarders (
DirectoryId,
RemoteDomainName,
DnsIpAddrs,
DnsIpv6Addrs,
region
)
SELECT 
'{{ DirectoryId }}' /* required */,
'{{ RemoteDomainName }}' /* required */,
'{{ DnsIpAddrs }}',
'{{ DnsIpv6Addrs }}',
'{{ region }}'
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: conditional_forwarders
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the conditional_forwarders resource.
    - name: DirectoryId
      value: "{{ DirectoryId }}"
      description: |
        The directory ID of the Amazon Web Services directory for which you are creating the conditional forwarder.
    - name: RemoteDomainName
      value: "{{ RemoteDomainName }}"
      description: |
        The fully qualified domain name (FQDN) of the remote domain with which you will set up a trust relationship.
    - name: DnsIpAddrs
      value:
        - "{{ DnsIpAddrs }}"
      description: |
        The IP addresses of the remote DNS server associated with RemoteDomainName.
    - name: DnsIpv6Addrs
      value:
        - "{{ DnsIpv6Addrs }}"
      description: |
        The IPv6 addresses of the remote DNS server associated with RemoteDomainName.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_conditional_forwarder"
    values={[
        { label: 'update_conditional_forwarder', value: 'update_conditional_forwarder' }
    ]}
>
<TabItem value="update_conditional_forwarder">

Updates a conditional forwarder that has been set up for your Amazon Web Services directory.

```sql
UPDATE aws.ds.conditional_forwarders
SET 
DirectoryId = '{{ DirectoryId }}',
RemoteDomainName = '{{ RemoteDomainName }}',
DnsIpAddrs = '{{ DnsIpAddrs }}',
DnsIpv6Addrs = '{{ DnsIpv6Addrs }}'
WHERE 
region = '{{ region }}' --required
AND DirectoryId = '{{ DirectoryId }}' --required
AND RemoteDomainName = '{{ RemoteDomainName }}' --required;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_conditional_forwarder"
    values={[
        { label: 'delete_conditional_forwarder', value: 'delete_conditional_forwarder' }
    ]}
>
<TabItem value="delete_conditional_forwarder">

Deletes a conditional forwarder that has been set up for your Amazon Web Services directory.

```sql
DELETE FROM aws.ds.conditional_forwarders
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
