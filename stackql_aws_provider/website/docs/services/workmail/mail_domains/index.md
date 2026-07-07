--- 
title: mail_domains
hide_title: false
hide_table_of_contents: false
keywords:
  - mail_domains
  - workmail
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

Creates, updates, deletes, gets or lists a <code>mail_domains</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="mail_domains" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.workmail.mail_domains" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_mail_domain"
    values={[
        { label: 'get_mail_domain', value: 'get_mail_domain' },
        { label: 'list_mail_domains', value: 'list_mail_domains' }
    ]}
>
<TabItem value="get_mail_domain">

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
    <td><CopyableCode code="DkimVerificationStatus" /></td>
    <td><code>string</code></td>
    <td>Indicates the status of a DKIM verification. (PENDING, VERIFIED, FAILED)</td>
</tr>
<tr>
    <td><CopyableCode code="IsDefault" /></td>
    <td><code>boolean</code></td>
    <td>Specifies whether the domain is the default domain for your organization.</td>
</tr>
<tr>
    <td><CopyableCode code="IsTestDomain" /></td>
    <td><code>boolean</code></td>
    <td>Specifies whether the domain is a test domain provided by WorkMail, or a custom domain.</td>
</tr>
<tr>
    <td><CopyableCode code="OwnershipVerificationStatus" /></td>
    <td><code>string</code></td>
    <td>Indicates the status of the domain ownership verification. (PENDING, VERIFIED, FAILED)</td>
</tr>
<tr>
    <td><CopyableCode code="Records" /></td>
    <td><code>array</code></td>
    <td>A list of the DNS records that WorkMail recommends adding in your DNS provider for the best user experience. The records configure your domain with DMARC, SPF, DKIM, and direct incoming email traffic to SES. See admin guide for more details.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_mail_domains">

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
    <td><CopyableCode code="MailDomains" /></td>
    <td><code>array</code></td>
    <td>The list of mail domain summaries, specifying domains that exist in the specified WorkMail organization, along with the information about whether the domain is or isn't the default.</td>
</tr>
<tr>
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>The token to use to retrieve the next page of results. The value becomes null when there are no more results to return. (pattern: &lt;code&gt;&#91;\S\s&#93;*|&#91;a-zA-Z0-9/+=&#93;&#123;1,1024&#125;&lt;/code&gt;)</td>
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
    <td><a href="#get_mail_domain"><CopyableCode code="get_mail_domain" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets details for a mail domain, including domain records required to configure your domain with recommended security.</td>
</tr>
<tr>
    <td><a href="#list_mail_domains"><CopyableCode code="list_mail_domains" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists the mail domains in a given WorkMail organization.</td>
</tr>
<tr>
    <td><a href="#register_mail_domain"><CopyableCode code="register_mail_domain" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-OrganizationId"><code>OrganizationId</code></a>, <a href="#parameter-DomainName"><code>DomainName</code></a></td>
    <td></td>
    <td>Registers a new domain in WorkMail and SES, and configures it for use by WorkMail. Emails received by SES for this domain are routed to the specified WorkMail organization, and WorkMail has permanent permission to use the specified domain for sending your users' emails.</td>
</tr>
<tr>
    <td><a href="#update_default_mail_domain"><CopyableCode code="update_default_mail_domain" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-OrganizationId"><code>OrganizationId</code></a>, <a href="#parameter-DomainName"><code>DomainName</code></a></td>
    <td></td>
    <td>Updates the default mail domain for an organization. The default mail domain is used by the WorkMail AWS Console to suggest an email address when enabling a mail user. You can only have one default domain.</td>
</tr>
<tr>
    <td><a href="#deregister_mail_domain"><CopyableCode code="deregister_mail_domain" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Removes a domain from WorkMail, stops email routing to WorkMail, and removes the authorization allowing WorkMail use. SES keeps the domain because other applications may use it. You must first remove any email address used by WorkMail entities before you remove the domain.</td>
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
    defaultValue="get_mail_domain"
    values={[
        { label: 'get_mail_domain', value: 'get_mail_domain' },
        { label: 'list_mail_domains', value: 'list_mail_domains' }
    ]}
>
<TabItem value="get_mail_domain">

Gets details for a mail domain, including domain records required to configure your domain with recommended security.

```sql
SELECT
DkimVerificationStatus,
IsDefault,
IsTestDomain,
OwnershipVerificationStatus,
Records
FROM aws.workmail.mail_domains
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_mail_domains">

Lists the mail domains in a given WorkMail organization.

```sql
SELECT
MailDomains,
NextToken
FROM aws.workmail.mail_domains
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="register_mail_domain"
    values={[
        { label: 'register_mail_domain', value: 'register_mail_domain' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="register_mail_domain">

Registers a new domain in WorkMail and SES, and configures it for use by WorkMail. Emails received by SES for this domain are routed to the specified WorkMail organization, and WorkMail has permanent permission to use the specified domain for sending your users' emails.

```sql
INSERT INTO aws.workmail.mail_domains (
ClientToken,
OrganizationId,
DomainName,
region
)
SELECT 
'{{ ClientToken }}',
'{{ OrganizationId }}' /* required */,
'{{ DomainName }}' /* required */,
'{{ region }}'
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: mail_domains
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the mail_domains resource.
    - name: ClientToken
      value: "{{ ClientToken }}"
      description: |
        Idempotency token used when retrying requests.
    - name: OrganizationId
      value: "{{ OrganizationId }}"
      description: |
        The WorkMail organization under which you're creating the domain.
    - name: DomainName
      value: "{{ DomainName }}"
      description: |
        The name of the mail domain to create in WorkMail and SES.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_default_mail_domain"
    values={[
        { label: 'update_default_mail_domain', value: 'update_default_mail_domain' }
    ]}
>
<TabItem value="update_default_mail_domain">

Updates the default mail domain for an organization. The default mail domain is used by the WorkMail AWS Console to suggest an email address when enabling a mail user. You can only have one default domain.

```sql
UPDATE aws.workmail.mail_domains
SET 
OrganizationId = '{{ OrganizationId }}',
DomainName = '{{ DomainName }}'
WHERE 
region = '{{ region }}' --required
AND OrganizationId = '{{ OrganizationId }}' --required
AND DomainName = '{{ DomainName }}' --required;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="deregister_mail_domain"
    values={[
        { label: 'deregister_mail_domain', value: 'deregister_mail_domain' }
    ]}
>
<TabItem value="deregister_mail_domain">

Removes a domain from WorkMail, stops email routing to WorkMail, and removes the authorization allowing WorkMail use. SES keeps the domain because other applications may use it. You must first remove any email address used by WorkMail entities before you remove the domain.

```sql
DELETE FROM aws.workmail.mail_domains
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
